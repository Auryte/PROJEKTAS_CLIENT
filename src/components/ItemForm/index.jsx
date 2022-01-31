import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import Button from '../Button';

const ItemForm = React.forwardRef((props, refOne) => {
  const { text, onButtonClick, initialValues, validationSchema, onSubmit, buttonText, error } = props;
  const [preview, setPreview] = useState(null);

  const handleInput = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  };
  return (<div className={styles.MainContainer}>
    <div className={styles.InputsContainer}>
      <button onClick={onButtonClick} className={styles.Close} >&#215;</button>
      <h2>{text}</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, values }) => (
          <Form className={styles.Form}>
            <div className={styles.InputContainer}>
              <Field
                className={styles.Input}
                name="title"
                placeholder="Pavadinimas"
                type="text"
                value={values.title}
              />
              {touched.title && errors.title && <div className={styles.ErrorContainer}>{errors.title}</div>}
            </div>
            <div className={styles.InputContainer}>
              <Field as="textarea"
                className={styles.InputDescription}
                name="description"
                placeholder="Aprašymas"
                type="textarea"
                value={values.description}
              />
              {touched.description && errors.description && <div className={styles.ErrDescription}>{errors.description}</div>}
            </div>
            <div className={styles.InputImgPathContainer}>
              <Field
                className={styles.Input}
                name="imgMainPath"
                type="text"
                value={values.imgMainPath}
              />
              {touched.imgMainPath && errors.imgMainPath && <div className={styles.ErrorContainer}>{errors.imgMainPath}</div>}
            </div>
            <div className={styles.InputContainer}>
              <Field
                className={styles.FileInput}
                name="image"
                type="file"
                value={values.image || ''}
                innerRef={refOne}
                onInput={() => handleInput(refOne.current.files[0])}
              />
              {touched.imgMainPath && errors.imgMainPath && <div className={styles.ErrorContainer}>{errors.imgMainPath}</div>}
            </div>
            <div className={styles.ImageContainer}>
              <img className={(preview || values.imgMainPath) ? styles.Image : styles.ImageNone} src={preview || values.imgMainPath} alt="" />
            </div>
            <FieldArray className={styles.InputContainer} name="images">
              {({ push, remove }) => (
                <div className={styles.FieldArrayMain}>
                  {values?.images?.map((image, index) => (
                    <div key={index} className={styles.FieldArray}>
                      <Field
                        className={styles.Input}
                        name={`images.${index}`}
                        type='text'
                        label="Image url"
                        placeholder="Pridėkite nuotraukos url"
                      />
                      <Button onClick={() => remove(index)} text='Ištrinti' className='btnOutlinedBlackText' />
                    </div>
                  ))}
                  <div className={styles.ArrayButtonContainer}>
                    <Button onClick={() => push('')} text='Įkelti paveikslėlių nuorodas' className='btnOutlinedBlackText' />
                    {touched.images && errors.images && <div className={styles.ErrArray}>{errors.images}</div>}
                  </div>
                </div>
              )}
            </FieldArray>
            <div className={styles.InputContainer}>
              <Field
                className={styles.Input}
                name="seoUrl"
                placeholder="SEO nuoroda"
                type="text"
                value={values.seoUrl}
              />
              {touched.seoUrl && errors.seoUrl && <div className={styles.ErrorContainer}>{errors.seoUrl}</div>}
            </div>
            <div className={styles.InputContainer}>
              <Field
                className={styles.Input}
                name="metaTitleTag"
                placeholder="Meta ntraštė"
                type="text"
                value={values.metaTitleTag}
              />
              {touched.metaTitleTag && errors.metaTitleTag && <div className={styles.ErrorContainer}>{errors.metaTitleTag}</div>}
            </div>
            <div className={styles.InputContainer}>
              <Field
                className={styles.Input}
                name="metaDescription"
                placeholder="Meta aprašymas"
                type="text"
                value={values.metaDescription}
              />
              {touched.metaDescription && errors.metaDescription && <div className={styles.ErrorContainer}>{errors.metaDescription}</div>}
            </div>
            <div className={styles.ButtonContainer}>
              <Button
                className='btnContained'
                text={buttonText}
                type='submit'
              />
            </div>
          </Form>
        )}
      </Formik>

      {
        error &&
        <div className={styles.ErrorContainerLast} >Klaida: {error}</div>
      }
    </div>
  </div>);
});
export default ItemForm;
ItemForm.displayName = 'ItemForm';

ItemForm.defaultProps = {
  refOne: () => { },
  error: ''
};
ItemForm.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  error: PropTypes.string,
  refOne: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ])
};
