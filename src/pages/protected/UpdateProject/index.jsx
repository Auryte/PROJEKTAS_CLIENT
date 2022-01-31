import React, { useState, createRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import APIupdate from '../../../API/update';
import API from '../../../API/get';
import { DisplayingProjectErrorMessagesSchema } from '../../../utils/validationSchema';
import useGetData from '../../../hooks/useGetData';
import { Loader } from '../../../components/Loader';
import ItemForm from '../../../components/ItemForm';
import { convertStringCharacters } from '../../../utils/text';

const UpdateProjectFrom = () => {
  const { seoUrl } = useParams();
  const [isUpdated, setisUpdated] = useState(false);
  const [project, isLoading] = useGetData(API.getProjectBySeoUrl(seoUrl), isUpdated);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const ref = createRef();

  if (isLoading) {
    return <Loader />;
  }
  const { title, description, imgMainPath, images, metaTitleTag, metaDescription } = project;
  const projectUpdate = async (data) => {
    try {
      const image = ref.current.files[0];
      const newSeoUrl = convertStringCharacters(data.seoUrl);
      const formData = new FormData();
      for (const key in data) {
        if (key === 'seoUrl') {
          formData.append('seoUrl', newSeoUrl);
        } else {
          formData.append(key, data[key]);
        }
      }
      if (image) { formData.append('image', image); }
      await APIupdate.updateProject(seoUrl, formData);
      setisUpdated(!isUpdated);
      navigate('/manage-projects');
    } catch (error) {
      setError(error);
      throw new Error(error);
    }
  };
  const handleCloseCancel = () => {
    navigate('/manage-projects');
  };
  const initialValues = {
    title: title,
    description: description,
    imgMainPath: imgMainPath,
    image: '',
    images: images,
    seoUrl: seoUrl,
    metaTitleTag: metaTitleTag,
    metaDescription: metaDescription
  };
  return (
    <ItemForm
      text='Redaguoti projektą'
      onButtonClick={handleCloseCancel}
      initialValues={initialValues}
      validationSchema={DisplayingProjectErrorMessagesSchema}
      onSubmit={(values, { resetForm }) => { projectUpdate(values); resetForm(); }}
      error={error}
      buttonText='Išsaugoti'
      ref={ref}
    />
  );
};

export default UpdateProjectFrom;
