import { useMemo } from 'react'
import languages from "../languages";

const useLanguages = () => {
  const URLParams = new URLSearchParams()
  const currentKey = useMemo(() => URLParams.get('lang') || 'en', []);
  const texts = useMemo(() => languages[currentKey] || languages.en, [currentKey]);

  const setLanguage = (key) => {
    window.location.replace(window.location.href.replace(`lang=${currentKey}`, `lang=${key}`))
  }

  return [texts, setLanguage]

}

export default useLanguages