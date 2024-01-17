import styled from "styled-components";

export const Container = styled.div`
  padding: 0 178px 120px;
  background-color: var(--body-color);
`;

export const FeatersSection = styled.section`
  margin-bottom: 120px;
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
