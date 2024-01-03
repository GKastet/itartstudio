import PropTypes from "prop-types";
import BtnSelectLang from "../Buttons/BtnSelectLang/BtnSelectLang";
import { HeaderWrapper } from "./HeaderStyled";

const Header = ({ lang, funcChangeLanguage }) => {
  return (
    <HeaderWrapper>
      <div>Header</div>
      <BtnSelectLang lang={lang} funcChangeLanguage={funcChangeLanguage} />
    </HeaderWrapper>
  );
};

Header.propTypes = {
  lang: PropTypes.string,
  funcChangeLanguage: PropTypes.func,
};

export default Header;
