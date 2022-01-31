import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../../API/login';
import UserContext from '../../../contexts/UserContext';
import UserForm from '../../../components/UserForm';

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { setLoggedIn } = useContext(UserContext);

  const userLogin = async ({ email, password }) => {
    try {
      const loginData = await API.login({ email, password });
      setLoggedIn(true);
      loginData.email
        ? navigate('/manage-project', { replace: true })
        : navigate('/login', { replace: true });
    } catch (error) {
      setError(error);
      throw new Error(error);
    }
  };
  const initialValues = {
    email: '',
    password: ''
  };
  return (
    <UserForm
      text='Prisijungimas'
      initialValues={initialValues}
      onSubmit={userLogin}
      buttonText='Prisijungti'
      error={error}
    />
  );
};

export default LoginForm;
