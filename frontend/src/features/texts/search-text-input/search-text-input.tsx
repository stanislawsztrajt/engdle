import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTexts, getFiltersTextsOptions } from '../slice/texts-slice';

const SearchTextInput: FC = () => {
  const dispatch = useDispatch();
  const filterTextsOptions = useSelector(getFiltersTextsOptions);

  return <input type="text" onChange={(e) => dispatch(filterTexts({ ...filterTextsOptions,  text: e.target.value}))} />;
};

export default SearchTextInput;
