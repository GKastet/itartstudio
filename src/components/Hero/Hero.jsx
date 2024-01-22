import { StyledHero } from "./Hero.styled";
import SectionDescription from "../Typography/SectionDescription/SectionDescription";
import HeroBtn from "./HeroBtn/HeroBtn";
import { useLang } from "../../langContext";
import { texts } from "../../helpers/texts";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  const { lang } = useLang();
  const {
    hero: { title, description, button},
  } = texts;

  return (
    <StyledHero>
      <div>
        <div>
          <h1>
            {/* Best */}
            {title[lang][0]}
            <span></span>
            <span></span>
            {/* digital results */}
            {title[lang][1]}
          </h1>
          <HeroBtn>{button[lang]}</HeroBtn>
          <SectionDescription>
            We specialize in bespoke web design and innovative development,
            <span>bringing your brand to life</span> with visually stunning
            interfaces and seamless features.
            <span>Collaborate with us now </span> for an exceptional, immersive
            digital experience.
          </SectionDescription>
        </div>
        <div>
          <Spline scene="https://prod.spline.design/RYWKcIOkNx-li9UP/scene.splinecode" />
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
