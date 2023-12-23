import styled from "styled-components";

export const StyledHero = styled.section`
  width: 100%;
  height: 1285px;
  background-color: white;
  padding-top: 100px;
  margin: 0 auto;

  & > div {
    display: flex;
    gap: 221px;
  }

 & > div > div:first-child {
    outline: 1px solid blue;
    width: 842px;
    margin-left: 20px;
    height: 677px;
  }

  div + div {
    padding-top: 168px;
    outline: 1px solid blue;
    width: 686px;
    margin: 0;
    display: block;
    overflow: hidden;
    height: 721px;
  }
`;
