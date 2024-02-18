import FeaturesItemInterval from "../FeaturesItem/FeaturesItemInterval";
import FeaturesItemDesc from "../FeaturesItem/FeaturesItemDesc";
import FeaturesItemResult from "../FeaturesItem/FeaturesItemResult";
import {
  FeaturesListS,
  SectionTitle,
  SectionTitleWrap,
  FeatersSection,
  HighlightedWord,
  SectionS,
} from "./FeaturesListStyled";
import icon from "../../../assets/icons.svg";
import TickerBlack from "../../Ticker/TickerBlack";
import TickerYellow from "../../Ticker/TickerYellow";

const FeaturesList = () => {
  return (
    <>
     <SectionS>
      <TickerBlack />
      <FeatersSection>
        <SectionTitleWrap>
          <SectionTitle>
            Where idea meets innovation{" "}
            <HighlightedWord>
              {" "}
              in every{" "}
              <svg>
                <use href={icon + "#features-title"}></use>
              </svg>
            </HighlightedWord>{" "}
            line of code
          </SectionTitle>
        </SectionTitleWrap>

        <FeaturesListS>
          <FeaturesItemInterval />
          <FeaturesItemDesc />
          <FeaturesItemResult />
        </FeaturesListS>
      </FeatersSection>
      <TickerYellow />
     </SectionS>
    </>
  );
};

export default FeaturesList;
