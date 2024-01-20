import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../images/Logo.svg";
// import BtnSelectLang from "../Buttons/BtnSelectLang/BtnSelectLang";
import {
  BtnContactUs,
  HeaderBox,
  HeaderWrapper,
  LogoBox,
  SectionsList,
} from "./HeaderStyled";
import getSectionContent from "../../helpers/getSectionContent";

const Header = ({ lang, funcChangeLanguage, sectionName }) => {
  const sectionContent = getSectionContent(lang, sectionName);
  // console.log("sectionHeaderContent: ", sectionContent);

  return (
    <HeaderWrapper>
      <HeaderBox>
        <SectionsList className="listMargin">
          <li>
            <ScrollLink to="main" smooth={true} duration={500}>
              {/* Main */}
              {sectionContent.home_nav_list[0].nav_item}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500}>
              {/* About */}
              {sectionContent.home_nav_list[1].nav_item}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="team" smooth={true} duration={500}>
              Team
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="services" smooth={true} duration={500}>
              Services
            </ScrollLink>
          </li>
        </SectionsList>
        <LogoBox>
          <Link to="/">
            <img src={Logo} alt="United web studio logo" />
          </Link>
        </LogoBox>
        <SectionsList>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>EN</li>
          <li>
            <BtnContactUs type="button">CONTACT US</BtnContactUs>
          </li>
        </SectionsList>
        {/* <BtnSelectLang lang={lang} funcChangeLanguage={funcChangeLanguage} /> */}
      </HeaderBox>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  lang: PropTypes.string,
  funcChangeLanguage: PropTypes.func,
  sectionName: PropTypes.string,
};

export default Header;
