import React, { FC } from 'react';
import TextItem from '../text-item';
import { Itext } from '../types';

interface Props {
  texts: Itext[];
}

const TextList: FC<Props> = ({ texts }) => {
  const textsList = texts.map((text) => {
    return <TextItem key={text.id + Math.random()} text={text} />;
  });

  return (
    <>
      {texts.length === 0 ? <div>You don&apos;t have any text</div> : textsList}
    </>
  );
};

export default TextList;
