"use client";

import React, {
  createContext, useState, useMemo,
} from "react";

type LanguageProviderProps = {
  children: React.ReactNode
};

const dispatch: React.Dispatch<React.SetStateAction<string>> = () => {};

export const LanguageContext = createContext(["vi", dispatch]);

export function LanguageProvider(props: LanguageProviderProps) {
  const {
    children,
  } = props;
  const [lang, setLang] = useState("vi");
  const memLangState = useMemo(() => [lang, setLang], [lang]);
  return (
    <LanguageContext.Provider value={memLangState}>
      {children}
    </LanguageContext.Provider>
  );
}
