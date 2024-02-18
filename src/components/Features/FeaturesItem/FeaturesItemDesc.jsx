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
      Based in Europe with roots originating in Ukraine, our passionate team comprises highly skilled web designers, developers, and copywriters.
      </FeaturesItemContent>

      <CircleWrapper className="corner-bottom">
        <CircleBox className="corner-bottom flag"></CircleBox>
      </CircleWrapper>
    </FeaturesItemWrapperS>
  );
};

export default FeaturesItemDesc;
