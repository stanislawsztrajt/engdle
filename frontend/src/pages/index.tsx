import { getTexts } from 'features/texts/slice/texts-slice';
import { getStatus, getUsers } from 'features/users/slice/users-slice';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { user } from 'utils/constans/index';

const Index: FC = () => {
  const texts = useSelector(getTexts);

  return <h1>Home</h1>;
};

export default Index;
