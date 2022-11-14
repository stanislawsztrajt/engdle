import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { searchTexts } from '../slice/texts-slice';

const SearchTextInput: FC = () => {
  const dispatch = useDispatch();

  return <input type="text" onChange={(e) => dispatch(searchTexts(e.target.value))} />;
};

export default SearchTextInput;
