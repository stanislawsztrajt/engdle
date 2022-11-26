import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { sortTextsBy } from 'features/texts/slice/texts-slice';
import { SortType, SortTypes, SortTypesList } from '../types';

const SortTextsSelect: FC = () => {
  const dispatch = useDispatch();

  const optionsList = SortTypesList.map((sortType) => {
    return (
      <option key={sortType} value={sortType}>
        {sortType}
      </option>
    );
  });

  return (
    <div>
      Sort by
      <select
        defaultValue={SortTypes.LATEST}
        onChange={(e) => dispatch(sortTextsBy(e.target.value as SortType))}
        name=""
        id=""
      >
        {optionsList}
      </select>
    </div>
  );
};

export default SortTextsSelect;
