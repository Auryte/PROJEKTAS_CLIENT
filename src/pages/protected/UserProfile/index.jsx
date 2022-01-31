import React, { useState } from 'react';
import API from '../../../API/get';
import APIupdate from '../../../API/update';
import useGetData from '../../../hooks/useGetData';
import { Loader } from '../../../components/Loader';
import UserForm from '../../../components/UserForm';

const UserProfile = () => {
  const [isUpdated, setisUpdated] = useState(false);
  const [message, setMessage] = useState('');
  const [users, isLoading] = useGetData(API.getUsers(), isUpdated);
  if (isLoading) {
    return <Loader />;
  }

  const userUpdate = async (data) => {
    try {
      await APIupdate.updateUser(users[0]?._id, data);
      setisUpdated(!isUpdated);
      setMessage('Duomenys išsaugoti');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      throw new Error(error);
    }
  };
  const initialValues = {
    email: users[0]?.email,
    password: users[0]?.password
  };
  return (
    <UserForm
      text='Profilio administravimas'
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => { userUpdate(values); resetForm(); }}
      buttonText='Išsaugoti'
      message={message}
    />
  );
};

export default UserProfile;
