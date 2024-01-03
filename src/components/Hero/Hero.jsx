import { StyledHero } from "./Hero.styled";
import SectionDescription from "../Typography/SectionDescription/SectionDescription";
import HeroBtn from "./HeroBtn/HeroBtn";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <div>
          <h1>
            Best
            <span>
            </span>
            <span></span> 
            digital results
          </h1>
          <HeroBtn/>
          <SectionDescription>
          We specialize in bespoke web design and innovative development, <span>bringing your brand to life</span> with visually stunning interfaces and seamless functionalities. <span>Collaborate with us </span>for a distinctive digital experience.
          </SectionDescription>
        </div>
        <div>
          <Spline scene="https://prod.spline.design/ZmWrmIqc2GrpK0kr/scene.splinecode" />
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
