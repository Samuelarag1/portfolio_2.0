"use client";
import { createContext, useContext, useState } from "react";
import { IMLanguage } from "../hooks/Language";
import { en } from "../hooks/Language/en";
import { es } from "../hooks/Language/es";

interface LanguageContextProps {
  language: IMLanguage;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<IMLanguage>(en);

  const toggleLanguage = () => {
    setCurrentLanguage((prevLanguage) => (prevLanguage === es ? en : es));
  };

  return (
    <LanguageContext.Provider
      value={{ language: currentLanguage, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a Language Provider");
  return context;
};
