import { StyledHero } from "./Hero.styled";
import SectionDescription from "../Typography/SectionDescription/SectionDescription";
import HeroBtn from "./HeroBtn/HeroBtn";
import { useLang } from "../../langContext";
import { texts } from "../../helpers/texts";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  const { lang } = useLang();
  const {
    hero: { title, description, button },
  } = texts;

  console.log(description[lang]);

  return (
    <StyledHero>
      <div>
        <div>
          <h1>
            {title[lang][0]}
            <span></span>
            <span></span>
            {title[lang][1]}
          </h1>
          <HeroBtn>{button[lang]}</HeroBtn>
          <SectionDescription
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
