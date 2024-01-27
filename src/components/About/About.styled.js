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

  img.inView {
    animation: scale-up-center 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
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

  @keyframes scale-up-center {
    0% {
      opacity: 0;
      transform: rotateY(100deg);
      transform-origin: left;
    }

    100% {
      opacity: 1;
      transform: rotateY(0);
      transform-origin: left;
    }
  }


`;
