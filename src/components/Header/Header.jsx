import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useLang } from "../../langContext";
import Logo from "../../images/Logo.svg";
import getSectionContent from "../../helpers/getSectionContent";
import BtnSelectLang from "../Buttons/BtnSelectLang/BtnSelectLang";
import {
  BtnOrder,
  HeaderBox,
  HeaderWrapper,
  LogoBox,
  SectionsList,
} from "./HeaderStyled";

const Header = () => {
  const { lang } = useLang();  
  const {
    sectionNames,
    sectionId,
    pagesPath,
    logoAlt,
    pagesName,
    btnOrder,
  } = getSectionContent(lang, "header");  

    const handleContactUs = () => {
    console.log("Contact Us");
  };

  return (
    <HeaderWrapper>
      <HeaderBox>
        <SectionsList className="listMargin">
          {sectionNames?.map((sectionName, idx) => {
            return (
              <li key={sectionName}>
                <ScrollLink
                  to={sectionId[idx]}
                  smooth={true}
                  duration={500}
                  style={{ textTransform: "capitalize" }}
                >
                  {sectionName}
                </ScrollLink>
              </li>
            );
          })}
        </SectionsList>
        <LogoBox>
          <Link to="/">
            <img src={Logo} alt={logoAlt} />
          </Link>
        </LogoBox>
        <SectionsList className="rightSide">
          <li>
            <Link to={`/${pagesPath[0]}`}>{pagesName[0]}</Link>
          </li>
          <li>
            <Link to={`/${pagesPath[1]}`}>{pagesName[1]}</Link>
          </li>
          <li>
            <BtnSelectLang />
          </li>
          <li>
            <BtnOrder type="button" onClick={handleContactUs}>
              {btnOrder}
            </BtnOrder>
          </li>
        </SectionsList>
      </HeaderBox>
    </HeaderWrapper>
  );
};

export default Header;
