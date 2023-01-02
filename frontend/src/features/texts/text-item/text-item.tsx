import { faCheck, faClose, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Itext } from '../types';
import useTextItem from './use-text-item';

interface Props {
  text: Itext;
}

const TextItem: FC<Props> = ({ text }) => {
  const { deleteText, closeText, uncloseText, toggleContext, isContextHidden } = useTextItem(text);

  return (
    <div className={`border rounded flex flex-col p-3`}>
      <div className="">
        <div className="flex flex-row justify-end gap-4">
          {text.context ? (
            <button
              onClick={toggleContext}
              className="text-gray-300 underline duration-100 hover:text-gray-600"
            >
              View context
            </button>
          ) : null}

          {text.isClosed ? (
            <FontAwesomeIcon
              className="w-5 h-5 text-gray-300 duration-100 cursor-pointer hover:text-gray-500"
              onClick={uncloseText}
              icon={faClose}
            />
          ) : (
            <FontAwesomeIcon
              className="w-5 h-5 text-green-300 duration-100 cursor-pointer hover:text-green-500"
              onClick={closeText}
              icon={faCheck}
            />
          )}
          <FontAwesomeIcon
            icon={faTrash}
            className="w-5 h-5 text-red-300 duration-100 cursor-pointer hover:text-red-500"
            onClick={deleteText}
          />
        </div>
        <span className={`text-black ${text.isClosed && 'line-through'}`}>
          {text.text} - {text.translatedText}
        </span>
      </div>

      <div className={`${isContextHidden ? 'hidden' : ''} ${text.isClosed && 'line-through'}`}>
        {text.context}
      </div>
    </div>
  );
};

export default TextItem;
