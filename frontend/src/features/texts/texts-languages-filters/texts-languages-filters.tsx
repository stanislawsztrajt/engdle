import React, { FC } from 'react';
import useTextsLanguagesFilters from './use-texts-languages-filters';

const TextsLanguagesFilters: FC = () => {
  const {
    usedLanguages,
    onCheckboxChange
  } = useTextsLanguagesFilters()

  const usedLanguagesList = usedLanguages.map((language) => {
    return (
      <div key={language.from + language.to}>
        {language.from}-{language.to}
        <input
          onChange={(e) => onCheckboxChange(e)}
          type="checkbox"
          value={JSON.stringify(language)}
        />
      </div>
    );
  });

  return <div>{usedLanguagesList}</div>;
};

export default TextsLanguagesFilters;
