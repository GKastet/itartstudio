import { fontSizeDetector } from "../../helpers/fontSizeDetector";
import { StyledHero } from "./Hero.styled";
import { useLang } from "../../langContext";
import SectionDescription from "../Typography/SectionDescription/SectionDescription";
import HeroBtn from "./HeroBtn/HeroBtn";
import allContent from "../../data/allContent";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  const { lang } = useLang();
  const {
    hero: { title, description, button },
  } = allContent;

  return (
    <StyledHero>
      <div>
        <div>
          <div>
          <h1 className={fontSizeDetector(title[lang][0], title["en"][0].length)}>
            {title[lang][0]}
            <span></span>
            <span></span>
            {title[lang][1]}
          </h1>
          <HeroBtn className={fontSizeDetector(button[lang], button["en"].length)}>{button[lang]}</HeroBtn>
          </div>
          <SectionDescription className={fontSizeDetector(description[lang], description["en"].length)}
            dangerouslySetInnerHTML={{ __html: description[lang] }}
          />
        </div>
        <div>
          <Spline scene="https://prod.spline.design/RYWKcIOkNx-li9UP/scene.splinecode" />
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
