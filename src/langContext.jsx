import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const funcChangeLanguage = (evt) => {
    const currentLang = evt.currentTarget.value;
    setLang(currentLang);
  };
  return (
    <LangContext.Provider value={{ lang, funcChangeLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

LangProvider.propTypes = {
  children: PropTypes.any,
};
