import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { maxLengthText } from 'utils/constans';
import LanguagesSelect from '../languages-select';
import useCreateTextForm from './use-create-text-form';
import { CopyButton } from 'features/ui';
import ComponentLoading from 'features/ui/component-loading';

const CreateTextForm: FC = () => {
  const {
    error,
    text,
    createTextInput,
    loading,
    createLoading,
    changeLanguageFrom,
    changeLanguageTo,
    setText,
    swapLanguages,
    handleCreateText
  } = useCreateTextForm();

  const isLoading: boolean = loading || createLoading

  return (
    <div className="mt-12">
      <h2 className="text-3xl text-center">Translate and Save your texts</h2>
      <div className="flex justify-center w-full">
        <form onSubmit={(e) => {
          e.preventDefault()
          handleCreateText()
        }} className="flex flex-col items-center justify-center w-full p-2 lg:w-3/4 xl:w-2/3 2xl:w-1/2">
          <div className="flex justify-between w-full gap-4 p-2 mt-4 lg:w-3/4 xl:w-2/3 2xl:w-1/3">
            <LanguagesSelect
              disabled={isLoading}
              language={text.language.from}
              changeLanguage={changeLanguageFrom}
            />
            <FontAwesomeIcon
              className="text-xl"
              onClick={swapLanguages}
              icon={faArrowRightArrowLeft}
            />
            <LanguagesSelect
              disabled={isLoading}
              language={text.language.to}
              changeLanguage={changeLanguageTo}
            />
          </div>
          <div className="w-full mt-4 ml-4 font-light text-left text-gray-400 xl:w-3/4">
            {text.text.length}/{maxLengthText}
          </div>
          <input
            autoFocus
            disabled={isLoading}
            type="text"
            maxLength={maxLengthText}
            ref={createTextInput}
            onChange={(e) => setText({ ...text, text: e.target.value })}
            value={text.text}
            className="w-full xl:w-3/4 input-underline"
            placeholder="Text which you want to translate"
          />
          <div className="flex justify-between w-full mt-4 text-lg text-left border-b cursor-not-allowed xl:w-3/4">
            <div className="ml-2">
              <div className="text-gray-400">
                {isLoading ? (
                  <ComponentLoading />
                ) : (
                  <>
                    {text.translatedText ? (
                      <div className="text-black">{text.translatedText}</div>
                    ) : (
                      'Translated text'
                    )}
                  </>
                )}
              </div>
            </div>
            <CopyButton toCopy={text.translatedText} />
          </div>
          <div className="mt-1">{error}&nbsp;</div>
          <button
            disabled={isLoading}
            type='submit'
            className="mt-4 lg:w-1/3 button-bg"
          >
            {isLoading ? <ComponentLoading /> : 'Save text'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTextForm;
