import styled from "styled-components";

export const SectionTitleWrap = styled.div`
  max-width: 772px;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  max-width: 762px;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-family: "700-Montserrat";
  font-size: 50px;
  line-height: 1.2;
  color: var(--main-text-color);
  /* white-space: nowrap; */

  svg {
    position: absolute;
    top: 3px;
    left: -12px;
    margin-bottom: -16px;
    width: 214px;
    height: 63px;
    z-index: -1;
  }
`;

export const HighlightedWord = styled.div`
  display: inline-block;
  position: relative;
  z-index: 1;
`;
