import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { languages } from "../../../helpers/languages";
import {
  ButtonStyled,
  LangItem,
  LanguageList,
  SelectWrapper,
} from "./BtnSelectLangStyled";

const BtnSelectLang = ({ lang, funcChangeLanguage }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const backgroundRef = useRef(null);
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        openSelect &&
        backgroundRef.current &&
        !backgroundRef.current?.contains(event.target)
      ) {
        setOpenSelect(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [openSelect]);
  const handleOnClickSelect = () => {
    setOpenSelect(!openSelect);
  };
  return (
    <SelectWrapper ref={backgroundRef}>
      <ButtonStyled type="button" onClick={handleOnClickSelect}>
        <p>{lang}</p>
      </ButtonStyled>
      <LanguageList className={openSelect ? "openSelect" : ""}>
        {languages.map((language) => (
          <LangItem key={language}>
            <input
              type="radio"
              name="language"
              id={language}
              className="custom-checkbox"
              value={language}
              onChange={funcChangeLanguage}
            />
            <label htmlFor={language}>
              <p>{language}</p>
            </label>
          </LangItem>
        ))}
      </LanguageList>
    </SelectWrapper>
  );
};

BtnSelectLang.propTypes = {
  lang: PropTypes.string,
  funcChangeLanguage: PropTypes.func,
};

export default BtnSelectLang;
