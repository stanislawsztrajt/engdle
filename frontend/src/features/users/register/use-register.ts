import { IregisterForm } from '../../auth/types';
import * as Yup from 'yup';
import { Ierror } from 'utils/types/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersServices from 'utils/api/users-services';

const initialValues: IregisterForm = {
  username: '',
  email: '',
  password: '',
  repeatedPassword: '',
};

const validationSchema = Yup.object({
  username: Yup.string()
    .max(30, 'Username must be shorter than 30 chars')
    .min(4, 'Username must be longer than 4 chars')
    .required('Required'),
  email: Yup.string()
    .max(30, 'Email must be shorter than 30 chars')
    .min(4, 'Email must be longer than 4 chars')
    .email('It must be an email')
    .required('Required'),
  password: Yup.string()
    .max(30, 'Password must be shorter than 30 chars')
    .min(4, 'Password must be longer than 4 chars')
    .required('Required'),
  repeatedPassword: Yup.string()
    .max(30, 'Repeated password must be shorter than 30 chars')
    .min(4, 'Repeated password must be longer than 4 chars')
    .oneOf([Yup.ref('password'), null], 'Does not match with password!')
    .required('Required'),
});

const useRegister = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async (values: IregisterForm) => {
    setLoading(true);
    try {
      await UsersServices.create(values);

      navigate('/auth/login');
    } catch (err) {
      const { response } = err as Ierror;
      setError(response.data.message);
    }
    setLoading(false);
  };

  return {
    validationSchema,
    initialValues,
    login,
    error,
    loading,
  };
};

export default useRegister;
