import styled from "styled-components";
import { StyledSectionDescription } from "../Typography/SectionDescription/SectionDescription.Styled";

export const StyledSection = styled.section`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 178px 120px 178px;

  & > div {
    width: 100%;
    display: flex;
    column-gap: ${(props) => {
      switch (props.$lang) {
        case "en":
          return "20px";
        case "ua":
          return "65px";
        default:
          break;
      }
    }};
  }

  h2 {
    position: relative;
    width: 100%;
    max-width: 772px;
    font-family: "700-Montserrat";
    font-size: 50px;
    line-height: normal;
    z-index: 0;
  }

  h2 svg {
    position: absolute;
    ${(props) => {
      switch (props.$lang) {
        case "en":
          return {
            right: "165px",
            bottom: "-4px",
            width: "248px",
            height: "72px",
          };
        case "ua":
          return {
            right: "18px",
            bottom: "31px",
            width: "337px",
            height: "81px",
          };
        case "sk":
          return {
            right: "277px",
            bottom: "34px",
            width: "179px",
            height: "81px",
          };
        default:
          break;
      }
    }};

    z-index: -1;
  }
`;

export const StyledServicesDescription = styled(StyledSectionDescription)`
  width: 100%;
  max-width: 772px;
  font-size: 28px;
  line-height: 1.5;

  .accent-text {
    font-family: "700-Montserrat";
  }
`;
