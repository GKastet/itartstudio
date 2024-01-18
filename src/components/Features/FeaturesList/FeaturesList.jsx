import FeaturesItemInterval from "../FeaturesItem/FeaturesItemInterval";
import FeaturesItemDesc from "../FeaturesItem/FeaturesItemDesc";
import FeaturesItemResult from "../FeaturesItem/FeaturesItemResult";
import {
  FeaturesListS,
  Container,
  SectionTitle,
  SectionTitleWrap,
} from "./FeaturesListStyled";
import icon from "../../../assets/icons.svg";

const FeaturesList = () => {
  return (
    <Container>
      <SectionTitleWrap>
        <SectionTitle>
          Where idea meets innovation
          <svg>
            <use href={icon + "#in-every-outline"}></use>
          </svg>
          line of code
        </SectionTitle>
      </SectionTitleWrap>

      <FeaturesListS>
        <FeaturesItemInterval />
        <FeaturesItemDesc />
        <FeaturesItemResult />
      </FeaturesListS>
    </Container>
  );
};

export default FeaturesList;
