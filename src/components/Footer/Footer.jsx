import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import FooterLogo from "../../images/footerlogo.svg";
import {
  FooterBox,
  FooterWrapper,
  FooterTitle,
  FooterNavList,
  FoterSocialList,
  FooterLogoList,
  LogoBox,
  FooterTagline,
  CopyRight,
  FooterContactsList,
} from "./FooterStyled";

const Footer = ({ lang, funcChangeLanguage }) => {
  return (
    <FooterWrapper>
      <FooterBox>
        <FooterNavList className="listMargin">
          <li>
          <FooterTitle>Sitemap</FooterTitle>
          </li>
          <li>
            <ScrollLink to="main" smooth={true} duration={500}>
              Main
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
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
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </FooterNavList>

        <FoterSocialList>
          <FooterTitle>Socials</FooterTitle>
          <li>
            <ScrollLink to="main" smooth={true} duration={500}>
              Whatsapp
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="main" smooth={true} duration={500}>
              Telegram
            </ScrollLink>
          </li>
        </FoterSocialList>
        <FooterLogoList>
          <LogoBox>
           <Link to="/">
             <img src={FooterLogo} alt="United web studio logo" />
           </Link>
          </LogoBox>
          <FooterTagline>
          Where idea meets innovation in every line of code
          </FooterTagline>
          <CopyRight>
            <li>
            © 2024 United Web Studio
            </li>
            <li>
              {/*Privacy Policy Посилання куди? */}
              Privacy Policy
            </li>            
          </CopyRight>
        </FooterLogoList>
        
        <FooterContactsList>
          <FooterTitle>Call</FooterTitle>
                    <li>
            <ScrollLink to="main" smooth={true} duration={500}>
              +380 98 876 6565
            </ScrollLink>
          </li>
          <li>
            <Link to="main" smooth={true} duration={500}>
              +380 98 876 6565
            </Link>
          </li>

          <FooterTitle>Write</FooterTitle>
           <li>
            <Link to="main" smooth={true} duration={500}>
 webstudiounited@gmail.com
            </Link>
          </li>
        </FooterContactsList>
      </FooterBox>
    </FooterWrapper>
  );
};

export default Footer;
