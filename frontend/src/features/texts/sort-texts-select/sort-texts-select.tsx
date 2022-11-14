import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { sortTextsBy } from 'features/texts/slice/texts-slice';

const SortTextsSelect: FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      Sort by
      <select onChange={(e) => dispatch(sortTextsBy(e.target.value))} name="" id="">
        <option value="alphabetically">alphabetically</option>
        <option value="latest">latest</option>
        <option value="oldest">oldest</option>
      </select>
    </div>
  );
};

export default SortTextsSelect;
