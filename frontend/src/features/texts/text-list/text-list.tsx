import React, { FC } from 'react';
import TextItem from '../text-item';
import { Itext } from '../types';

interface Props {
  texts: Itext[];
}

const TextList: FC<Props> = ({ texts }) => {
  const textsList = texts.map((text) => {
    return <TextItem key={text.id} text={text} />;
  });

  return (
    <div className='flex justify-center'>
      <div className='grid w-full grid-cols-2 gap-4 p-2 md:grid-cols-3 xl:w-3/4 2xl:w-2/3'>
        {
          texts.length === 0 ? (
            <div>You don&apos;t have any text</div>
          ) : (
            textsList
          )
        }
      </div>
    </div>
  )
};

export default TextList;
