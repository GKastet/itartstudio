import { FeaturesItemContent, FeaturesItemInfoWrap, FeaturesItemTitle, FeaturesItemWrapperS, CircleBox, CircleWrapper } from "./FeaturesItemStyled";


const FeaturesItemResult = () => {
    return (
  
      <FeaturesItemWrapperS  className="corner-top">
      <FeaturesItemInfoWrap>
        <FeaturesItemTitle>100%</FeaturesItemTitle>
        <FeaturesItemContent>guaranteed result</FeaturesItemContent>
      </FeaturesItemInfoWrap>
      <CircleWrapper className="corner-top">
      <CircleBox className="corner-top fire"> 
      </CircleBox>
      </CircleWrapper>
      
    </FeaturesItemWrapperS>
  
    )
  }
  
  export default FeaturesItemResult;
  