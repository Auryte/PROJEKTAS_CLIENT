import React from 'react';
import { Form, Field, Formik } from 'formik';
import PropTypes from 'prop-types';
import { DisplayingLoginErrorMessagesSchema } from '../../utils/validationSchema';
import styles from './styles.module.css';
import Button from '../Button';

const UserForm = (props) => {
  const { text, initialValues, onSubmit, buttonText, message, error } = props;
  return (<div className={styles.MainContainer}>
    <div className={styles.InputContainer}>
      <h2>{text}</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={DisplayingLoginErrorMessagesSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, values }) => (
          <Form className={styles.Form}>

            <Field
              className={styles.Field}
              name="email"
              placeholder="El. paštas"
              type="text"
              value={values.email}
            />
            {touched.email && errors.email && <div className={styles.ErrorContainer}>{errors.email}</div>}

            <Field
              className={styles.Field}
              name="password"
              placeholder="Slaptažodis"
              type="password"
              value={values.password}
            />
            {touched.password && errors.password && <div className={styles.ErrorContainerScnd}>{errors.password}</div>}
            <div className={styles.ButtonContainer}>
              <Button
                className='btnContained'
                text={buttonText}
                type='Submit'
              />

            </div>
          </Form>
        )}
      </Formik>
      {
        error &&
          <div className={styles.ErrorContainerLast} >Klaida: {error}</div>
      }
      {
        message && <div className={styles.Message}>{message}</div>
      }
    </div>
  </div>
  );
};

export default UserForm;

UserForm.defaultProps = {
  message: '',
  error: ''
};
UserForm.propTypes = {
  text: PropTypes.string.isRequired,
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  message: PropTypes.string,
  error: PropTypes.string
};
