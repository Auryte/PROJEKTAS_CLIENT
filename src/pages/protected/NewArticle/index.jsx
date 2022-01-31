import React, { useState, createRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DisplayingArticleErrorMessagesSchema } from '../../../utils/validationSchema';
import APIcreate from '../../../API/create';
import ItemForm from '../../../components/ItemForm';
import Button from '../../../components/Button';
import PopUp from '../../../components/PopUp';
import { convertStringCharacters } from '../../../utils/text';

const CreateArticleForm = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const ref = createRef();

  const articleCreate = (data) => {
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

      APIcreate.createArticle(formData);
      setUrl(newSeoUrl);
    } catch (error) {
      setError(error);
      throw new Error(error);
    }
  };

  const handleCloseCancel = () => {
    navigate('/manage-articles');
  };
  const handleClose = () => {
    setIsPopUpOpen(false);
    navigate(`../interjero-patarimai/${url}`);
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
        text='Naujas straipsnis'
        onButtonClick={handleCloseCancel}
        initialValues={initialValues}
        validationSchema={DisplayingArticleErrorMessagesSchema}
        onSubmit={(values, { resetForm }) => { articleCreate(values); resetForm(); }}
        buttonText='Sukurti'
        ref={ref}
        error={error}
      />
      {isPopUpOpen &&
        <PopUp
          content={
            <>
              <div>Straipsnis pavadinimu <b> &quot;{title}&quot; </b> sukurtas. </div>
              <Button onClick={() => handleClose()} className='btnOutlinedBlackText' text='Peržiūrėti straipsnį' />
            </>
          }
          handleCloseCancel={() => setIsPopUpOpen(false)}
        />
      }
    </>
  );
};

export default CreateArticleForm;
