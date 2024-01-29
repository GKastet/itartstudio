import styled from "styled-components";

export const StyledAbout = styled.section`
  width: 1920px;
  height: 1038px;
  padding-top: 60px;
  margin: 0 auto;

  img {
    width: 818px;
  }

  & > div {
    display: flex;
  }

  div > div:last-child {
    padding: 120px 178px 0 152px;
  }

  h2 {
    margin-bottom: 40px;
  }

  p {
    width: 752px;
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    gap: 20px;
  }
`;
