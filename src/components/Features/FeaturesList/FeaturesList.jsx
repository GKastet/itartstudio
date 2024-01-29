import FeaturesItemInterval from "../FeaturesItem/FeaturesItemInterval";
import FeaturesItemDesc from "../FeaturesItem/FeaturesItemDesc";
import FeaturesItemResult from "../FeaturesItem/FeaturesItemResult";
import {
  FeaturesListS,
  Container,
  SectionTitle,
  SectionTitleWrap,
  FeatersSection,
} from "./FeaturesListStyled";
import icon from "../../../assets/icons.svg";
import TickerBlack from "../../Ticker/TickerBlack";
// import TickerYellow from "../../Ticker/TickerYellow";

const FeaturesList = () => {
  return (
    <Container>
      <TickerBlack />
      <FeatersSection>
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
      </FeatersSection>
      {/* <TickerYellow /> */}
    </Container>
  );
};

export default FeaturesList;
