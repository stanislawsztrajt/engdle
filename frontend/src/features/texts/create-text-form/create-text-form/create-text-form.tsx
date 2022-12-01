import React, { FC } from 'react';
import { maxLengthText } from 'utils/constans';
import LanguagesSelect from '../languages-select';
import useCreateTextForm from './use-create-text-form';

const CreateTextForm: FC = () => {
  const { error, text, createTextInput, changeLanguageFrom, changeLanguageTo, setText, createText, swapLanguages } =
    useCreateTextForm();

  return (
    <div>
      <h2>Create text form</h2>
      <div>
        <input
          autoFocus
          type="text"
          maxLength={maxLengthText}
          ref={createTextInput}
          onChange={(e) => setText({ ...text, text: e.target.value })}
          value={text.text}
          placeholder="Text which you want to translate"
        />
        <button onClick={createText} type="button">
          Save
        </button>
        <div>{text.text.length}/{maxLengthText}</div>
        <div>{text.translatedText}</div>
        <div onClick={swapLanguages}>
          {'->'} {'<-'}
        </div>
        {error}
        <LanguagesSelect language={text.language.from} changeLanguage={changeLanguageFrom} />
        <LanguagesSelect language={text.language.to} changeLanguage={changeLanguageTo} />
      </div>
    </div>
  );
};

export default CreateTextForm;
