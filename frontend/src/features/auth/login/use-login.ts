import { IloginForm, IloginResponseData } from '../types';
import * as Yup from 'yup';
import axios from 'axios';
import { Ierror } from 'utils/types/api';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import authServices from 'utils/api/auth-services';

const initialValues: IloginForm = {
  email: '',
  password: '',
  isRemember: false,
};

const validationSchema = Yup.object({
  email: Yup.string()
    .max(50, 'Email must be shorter than 50 chars')
    .min(4, 'Email must be longer than 4 chars')
    .email('It must be an email')
    .required('Required'),
  password: Yup.string()
    .max(50, 'Password must be shorter than 50 chars')
    .min(4, 'Password must be longer than 4 chars')
    .required('Required'),
  isRemember: Yup.boolean(),
});

const useLogin = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (values: IloginForm) => {
    setLoading(true);
    try {
      const { isRemember, ...loginValues } = values;
      const data = await authServices.login(loginValues);

      // if the user checked "Remember me", user will not be logged out else user will be logged out after 7 days
      const expires = isRemember ? 999999999999999 : 7;

      Cookies.set('jwt', data.jwt, { expires });
      Cookies.set('user', JSON.stringify(data.user), { expires });

      navigate('/dashboard');
      navigate(0); // reloading
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

export default useLogin;
