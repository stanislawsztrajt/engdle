import React, { FC } from 'react';
import { Itext } from '../types';
import useTextItem from './use-text-item';

interface Props {
  text: Itext;
}

const TextItem: FC<Props> = ({ text }) => {
  const { deleteText, closeText, uncloseText } = useTextItem(text);

  return (
    <div className={`border-4 ${text.isClosed && 'line-through'}`}>
      <div>{text.id}</div>
      {text.text} - {text.translatedText}
      {text.isClosed ? (
        <div onClick={uncloseText}>unclose</div>
      ) : (
        <div onClick={closeText}>close</div>
      )}
      <button onClick={deleteText}>remove X</button>
    </div>
  );
};

export default TextItem;
