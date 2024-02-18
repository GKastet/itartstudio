import styled from "styled-components";

export const SectionS = styled.section`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 76px 0 60px;
  background-color: var(--body-color);
`;

export const FeatersSection = styled.div`
  /* padding: 120px 178px 120px; */
  padding: 0 178px;
`;

export const SectionTitleWrap = styled.div`
  max-width: 776px;
  margin-bottom: 94px;
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
    width: 219px;
    height: 63px;
    z-index: -1;
  }
`;

export const HighlightedWord = styled.div`
  display: inline-block;
  position: relative;
  z-index: 1;
`;

export const FeaturesListS = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
