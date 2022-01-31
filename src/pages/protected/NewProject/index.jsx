import React, { useState, createRef } from 'react';
import { DisplayingProjectErrorMessagesSchema } from '../../../utils/validationSchema';
import Button from '../../../components/Button';
import APIcreate from '../../../API/create';
import PopUp from '../../../components/PopUp';
import { useNavigate } from 'react-router-dom';
import ItemForm from '../../../components/ItemForm';
import { convertStringCharacters } from '../../../utils/text';

const CreateProjectForm = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const ref = createRef();

  const projectCreate = (data) => {
    try {
      const image = ref.current.files[0];
      const newSeoUrl = convertStringCharacters(data.seoUrl);
      setTitle(data.title);
      setIsPopUpOpen(true);
      const formData = new FormData();
      for (const key in data) {
        if (key === 'seoUrl') {
          formData.append('seoUrl', newSeoUrl);
        } else {
          formData.append(key, data[key]);
        }
      }
      formData.append('image', image);

      APIcreate.createProject(formData);
      setUrl(newSeoUrl);
    } catch (error) {
      setError(error);
      throw new Error(error);
    }
  };
  const handleClose = () => {
    setIsPopUpOpen(false);
    navigate(`../interjero-dizainas/${url}`);
  };
  const handleCloseCancel = () => {
    navigate('/manage-projects');
  };
  const initialValues = {
    title: '',
    description: '',
    imgMainPath: '',
    image: '',
    images: [],
    seoUrl: '',
    metaTitleTag: '',
    metaDescription: ''
  };
  return (
    <>
      <ItemForm
        text='Naujas projektas'
        onButtonClick={handleCloseCancel}
        initialValues={initialValues}
        validationSchema={DisplayingProjectErrorMessagesSchema}
        onSubmit={(values, { resetForm }) => { projectCreate(values); resetForm(); }}
        buttonText='Sukurti'
        ref={ref}
        error={error}
      />

      { isPopUpOpen &&
          <PopUp
            content={
              <>
                <div>Projektas pavadinimu <b> &quot;{title}&quot; </b> sukurtas. </div>
                <Button onClick={() => handleClose()} className='btnOutlinedBlackText' text='Peržiūrėti projektą'/>
              </>
            }
            handleCloseCancel={() => setIsPopUpOpen(false)}
          />
      }
    </>
  );
};

export default CreateProjectForm;
