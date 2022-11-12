import React, { FC } from 'react';
import { Itext } from '../types';

interface Props {
  text: Itext;
}

const TextItem: FC<Props> = ({ text }) => {
  return (
    <div>
      {text.text}-{text.translatedText}
      {text.isClosed}
      <input type="checkbox" />
    </div>
  );
};

export default TextItem;
