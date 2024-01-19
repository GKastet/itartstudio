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

  const toggleSelect = ()=>{
    setOpenSelect(!openSelect);
  }

  const handleClickLang = (evt) =>{
    funcChangeLanguage(evt)
    setOpenSelect(false);
  }  
  
  return (
    <SelectWrapper ref={backgroundRef}>
      <ButtonStyled type="button" onMouseEnter={()=>toggleSelect()}>
        <p>{lang.toUpperCase()}</p>
      </ButtonStyled>
      <LanguageList className={openSelect ? "openSelect" : ""} onMouseLeave={()=>setOpenSelect(false)}>
        {languages.map((language) => (
          <LangItem key={language}>
            <input
              type="radio"
              name="language"
              id={language}
              className="custom-checkbox"
              value={language}              
              onChange={handleClickLang}
            />
            <label htmlFor={language}>
              <p>{language.toUpperCase()}</p>
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
