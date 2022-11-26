import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTexts, getFiltersTextsOptions, getUsedLanguages } from '../slice/texts-slice';
import { Ilanguage } from '../types';

const useTextsLanguagesFilters = () => {
  const dispatch = useDispatch();
  const usedLanguages = useSelector(getUsedLanguages);
  const filterTextsOptions = useSelector(getFiltersTextsOptions);

  const [languagesFilters, setLangaugesFilters] = useState<Ilanguage[]>([]);

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedLanguage = e.target.value;
    let selectedLanguages: Ilanguage[] = [];

    if (e.target.checked) {
      const parsedLanguage: Ilanguage = JSON.parse(selectedLanguage);
      selectedLanguages = [...languagesFilters, parsedLanguage];
    } else {
      selectedLanguages = languagesFilters.filter(
        (language) => JSON.stringify(language) !== selectedLanguage
      );
    }

    setLangaugesFilters(selectedLanguages);
    dispatch(filterTexts({ ...filterTextsOptions, languages: selectedLanguages }));
  };

  return {
    usedLanguages,
    onCheckboxChange
  };
};

export default useTextsLanguagesFilters;
