import React, { FC } from 'react';
import { languages } from 'utils/data/languages';

interface Props {
  language: string;
  changeLanguage: (languageCode: string) => void;
}

const LanguagesSelect: FC<Props> = (props) => {
  const languageList = languages.map((language) => {
    return (
      <option
        selected={language.code === props.language}
        key={language.code + Math.random()}
        value={language.code}
      >
        {language.name}
      </option>
    );
  });

  return (
    <select className="outline-none" onChange={(e) => props.changeLanguage(e.target.value)}>
      {languageList}
    </select>
  );
};

export default LanguagesSelect;
