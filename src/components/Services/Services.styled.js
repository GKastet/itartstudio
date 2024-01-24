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
    column-gap: 20px;
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
    right: 165px;
    bottom: -4px;
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
