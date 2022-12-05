import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTexts, getFiltersTextsOptions } from '../slice/texts-slice';

const SearchTextInput: FC = () => {
  const dispatch = useDispatch();
  const filterTextsOptions = useSelector(getFiltersTextsOptions);

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        className="input-underline"
        placeholder="Search text"
        onChange={(e) => dispatch(filterTexts({ ...filterTextsOptions, text: e.target.value }))}
      />
    </div>
  );
};

export default SearchTextInput;
