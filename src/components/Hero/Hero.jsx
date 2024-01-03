import { StyledHero } from "./Hero.styled";
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
            <span></span> digital results
          </h1>
        </div>
        <div>
          <Spline scene="https://prod.spline.design/ZmWrmIqc2GrpK0kr/scene.splinecode" />
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
