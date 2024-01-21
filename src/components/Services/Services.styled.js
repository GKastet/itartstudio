import styled from "styled-components";
import { StyledSectionDescription } from "../Typography/SectionDescription/SectionDescription.Styled";

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  background: #fff;
  color: #1c0f0f;
  padding: 0 178px 120px 178px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 20px;

  h2 {
    position: relative;
    width: 100%;
    max-width: 772px;
    font-family: "700-Montserrat";
    font-size: 50px;
    font-weight: 700;
    line-height: normal;
    z-index: 0;
  }

  h2 svg {
    position: absolute;
    right: 165px;
    bottom: -2px;
    z-index: -1;
  }
`;

export const StyledServicesDescription = styled(StyledSectionDescription)`
  width: 100%;
  max-width: 772px;
  font-size: 28px;

  .accent-text {
    color: #1c0f0f;
    font-family: "700-proxima-nova";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
  }
`;
