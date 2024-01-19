import styled from "styled-components";

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  padding: 76px 0 60px;
  background-color: var(--body-color);
`;

export const FeatersSection = styled.section`
  /* padding: 120px 178px 120px; */
  padding: 0 178px;
`;

export const SectionTitleWrap = styled.div`
  max-width: 772px;
  margin-bottom: 60px;
`;

export const SectionTitle = styled.h2`
  font-family: "700-proxima-nova";
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--main-text-color);

  svg {
    margin-bottom: -16px;
    width: 219px;
    height: 63px;
  }
`;

export const FeaturesListS = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
