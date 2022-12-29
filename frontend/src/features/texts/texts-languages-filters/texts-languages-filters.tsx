import React, { FC } from 'react';
import useTextsLanguagesFilters from './use-texts-languages-filters';

const TextsLanguagesFilters: FC = () => {
  const { usedLanguages, onCheckboxChange } = useTextsLanguagesFilters();

  const usedLanguagesList = usedLanguages.map((language) => {
    const usedLanguageKey = `used-language-${language.from + language.to}`;

    return (
      <div
        key={usedLanguageKey}
      >
        <input
          onChange={(e) => onCheckboxChange(e)}
          type="checkbox"
          className="w-0 h-0 peer"
          id={usedLanguageKey}
          name={usedLanguageKey}
          value={JSON.stringify(language)}
        />
        <label
          htmlFor={usedLanguageKey}
          className="px-3 py-2 text-lg font-medium text-center duration-100 border border-gray-600 rounded-full hover:text-indigo-600 hover:border-indigo-600 peer-checked:text-indigo-700 peer-checked:border-indigo-700"
        >
          {language.from}-{language.to}
        </label>
      </div>
    );
  });

  return (
    <>
      { usedLanguages.length > 0 ?
      (
        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-4xl'>
            Filters
          </h3>
          <div className="flex flex-row items-center justify-center w-full gap-2 px-2 mt-2 xl:2/3 2xl:w-1/2">
          {usedLanguagesList}
          </div>
        </div>
      )
      : null }
    </>
  )
};

export default TextsLanguagesFilters;
