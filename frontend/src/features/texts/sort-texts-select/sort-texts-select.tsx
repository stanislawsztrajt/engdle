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
    <div className="p-2">
      <span className="text-lg">Sort by</span>
      <select
        defaultValue={SortTypes.LATEST}
        onChange={(e) => dispatch(sortTextsBy(e.target.value as SortType))}
        className="px-2 py-1 ml-2 text-lg border border-gray-500 rounded-full outline-none"
      >
        {optionsList}
      </select>
    </div>
  );
};

export default SortTextsSelect;
