import styled from "styled-components";
import { StyledSectionDescription } from "../Typography/SectionDescription/SectionDescription.Styled";

export const Container = styled.div`
  background: #fff;
  color: #1c0f0f;
  padding: 0 178px 120px 178px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  h2 {
    position: relative;

    max-width: 772px;
    width: 100%;
    margin: 0 20px 120px 0;

    /* font-family: "Bold-proxima-nova"; */
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    z-index: 0;
  }

  svg {
    position: absolute;
    right: 202px;
    bottom: -4px;
    z-index: -1;
  }
`;

export const StyledServicesDescription = styled(StyledSectionDescription)`
  max-width: 772px;
  width: 100%;
  /* font-family: "Medium-proxima-nova"; */
  .accent-text {
    /* color: #1c0f0f; */
    /* font-family: "Bold-proxima-nova"; */
    /* font-size: 32px; */
    font-style: normal;
    /* font-weight: 700; */
    line-height: normal;
  }
`;
