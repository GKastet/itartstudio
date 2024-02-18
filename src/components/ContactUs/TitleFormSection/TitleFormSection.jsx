import {
  HighlightedWord,
  SectionTitle,
  SectionTitleWrap,
  TitleWrapper,
} from "./TitleFormSectionStyled";
import icon from "../../../assets/icons.svg";

const TitleFormSection = () => {
  return (
    <SectionTitleWrap>
      <TitleWrapper>
        <SectionTitle>
          This is how you can let us know about your <HighlightedWord>project 
            <svg>
              <use href={icon + "#features-title"}></use>
            </svg>
          </HighlightedWord> and how we can help
        </SectionTitle>
      </TitleWrapper>
    </SectionTitleWrap>
  );
};

export default TitleFormSection;
