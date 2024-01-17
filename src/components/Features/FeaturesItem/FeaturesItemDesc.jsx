import {
  FeaturesItemContent,
  FeaturesItemWrapperS,
  CircleBox,
  CircleWrapper,
} from "./FeaturesItemStyled";

const FeaturesItemDesc = () => {
  return (
    <FeaturesItemWrapperS className="corner-bottom">
      <FeaturesItemContent>
        Based in Europe with roots in Ukraine, our passionate team comprises
        skilled web designers and developers. We transform ideas into remarkable
        online experiences.
      </FeaturesItemContent>

      <CircleWrapper className="corner-bottom">
        <CircleBox className="corner-bottom flag"></CircleBox>
      </CircleWrapper>
    </FeaturesItemWrapperS>
  );
};

export default FeaturesItemDesc;
