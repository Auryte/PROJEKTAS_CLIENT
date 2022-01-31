import React, { useState, createRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import APIupdate from '../../../API/update';
import API from '../../../API/get';
import { DisplayingArticleErrorMessagesSchema } from '../../../utils/validationSchema';
import useGetData from '../../../hooks/useGetData';
import { Loader } from '../../../components/Loader';
import ItemForm from '../../../components/ItemForm';
import { convertStringCharacters } from '../../../utils/text';

const UpdateArticleFrom = () => {
  const { seoUrl } = useParams();
  const [isUpdated, setisUpdated] = useState(false);
  const [article, isLoading] = useGetData(API.getArticleBySeoUrl(seoUrl), isUpdated);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const ref = createRef();

  if (isLoading) {
    return <Loader />;
  }
  const { title, description, images, metaTitleTag, metaDescription, imgMainPath } = article;

  const articleUpdate = async (data) => {
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
      await APIupdate.updateArticle(seoUrl, formData);
      setisUpdated(!isUpdated);
      navigate('/manage-articles');
    } catch (error) {
      setError(error);
      throw new Error(error);
    }
  };
  const handleCloseCancel = () => {
    navigate('/manage-articles');
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
      text='Redaguoti straipsnį'
      onButtonClick={handleCloseCancel}
      initialValues={initialValues}
      validationSchema={DisplayingArticleErrorMessagesSchema}
      onSubmit={(values) => { articleUpdate(values); }}
      buttonText='Išsaugoti'
      error={error}
      ref={ref}
    />
  );
};

export default UpdateArticleFrom;
