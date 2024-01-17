import {
  FeaturesItemContent,
  FeaturesItemInfoWrap,
  FeaturesItemTitle,
  FeaturesItemWrapperS,
  CircleBox,
  CircleWrapper,
} from "./FeaturesItemStyled";

const FeaturesItemInterval = () => {
  return (
    <FeaturesItemWrapperS className="corner-top">
      <FeaturesItemInfoWrap>
        <FeaturesItemTitle>2 - 4 weeks</FeaturesItemTitle>
        <FeaturesItemContent>from idea to MVP</FeaturesItemContent>
      </FeaturesItemInfoWrap>

      <CircleWrapper className="corner-top">
        <CircleBox className="corner-top flash"></CircleBox>
      </CircleWrapper>
    </FeaturesItemWrapperS>
  );
};

export default FeaturesItemInterval;
