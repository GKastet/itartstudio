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

  h2 {
    position: relative;

    width: 100%;
    max-width: 772px;
    margin: 0 20px 120px 0;

    font-family: "700-proxima-nova";
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    z-index: 0;
  }

  h2 svg {
    position: absolute;
    right: 202px;
    bottom: -4px;
    z-index: -1;
  }
`;

export const StyledServicesDescription = styled(StyledSectionDescription)`
  width: 100%;
  max-width: 772px;
  font-family: "500-proxima-nova";
  font-weight: 500;

  .accent-text {
    color: #1c0f0f;
    font-family: "700-proxima-nova";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
  }
`;
