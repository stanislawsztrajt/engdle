import React, { FC } from 'react';
import LanguagesSelect from '../languages-select';
import useCreateTextForm from './use-create-text-form';

const CreateTextForm: FC = () => {
  const { text, changeLanguageFrom, changeLanguageTo, setText, createText, swapLanguages } =
    useCreateTextForm();

  return (
    <div>
      <h2>Create text form</h2>
      <form>
        <input
          type="text"
          onChange={(e) => setText({ ...text, text: e.target.value })}
          value={text.text}
          placeholder="Text which you want to translate"
        />
        <div>{text.translatedText}</div>
        <div onClick={swapLanguages}>
          {'->'} {'<-'}
        </div>
        <LanguagesSelect language={text.language.from} changeLanguage={changeLanguageFrom} />
        <LanguagesSelect language={text.language.to} changeLanguage={changeLanguageTo} />
        <button onClick={createText} type="button">Save</button>
      </form>
    </div>
  );
};

export default CreateTextForm;
