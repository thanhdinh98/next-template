import { useContext, Dispatch, SetStateAction } from "react";
import { LanguageContext } from "@/lib/context/language";

function useLanguage() {
  const [lang, setLang] = useContext(LanguageContext);
  return {
    lang: <string>lang,
    dispatch: <Dispatch<SetStateAction<string>>>setLang,
  };
}

export default {
  useLanguage,
};
