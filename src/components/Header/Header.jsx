import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { texts } from "../../helpers/texts";
import Logo from "../../images/Logo.svg";
import BtnSelectLang from "../Buttons/BtnSelectLang/BtnSelectLang";
import {
  BtnContactUs,
  HeaderBox,
  HeaderWrapper,
  LogoBox,
  SectionsList,
} from "./HeaderStyled";
import { useLang } from "../../langContext";

const Header = () => {
  const { lang } = useLang();
  const {
    header: { sectionNames, logoAlt, pagesName, btnContactUs },
  } = texts;
  const sections = sectionNames[lang];
  const sectionsTo = sectionNames.en;
  const pages = pagesName[lang];
  const pagesLinkTo = pagesName.en;

  const handleContactUs = () => {
    console.log("Contact Us");
  };

  return (
    <HeaderWrapper>
      <HeaderBox>
        <SectionsList className="listMargin">
          {sections?.map((section, idx) => {
            return (
              <li key={section}>
                <ScrollLink
                  to={sectionsTo[idx]}
                  smooth={true}
                  duration={500}
                  style={{ textTransform: "capitalize" }}
                >
                  {section}
                </ScrollLink>
              </li>
            );
          })}
        </SectionsList>
        <LogoBox>
          <Link to="/">
            <img src={Logo} alt={logoAlt[lang]} />
          </Link>
        </LogoBox>
        <SectionsList className="rightSide">
          <li>
            <Link to={`/${pagesLinkTo[0].toLowerCase()}`}>{pages[0]}</Link>
          </li>
          <li>
            <Link to={`/${pagesLinkTo[1].toLowerCase()}`}>{pages[1]}</Link>
          </li>
          <li>
            <BtnSelectLang />
          </li>
          <li>
            <BtnContactUs type="button" onClick={handleContactUs}>
              {btnContactUs[lang]}
            </BtnContactUs>
          </li>
        </SectionsList>
      </HeaderBox>
    </HeaderWrapper>
  );
};

export default Header;
