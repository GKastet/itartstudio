import styled from "styled-components";
import computerBoy from "../../images/computerBoy.png";
import girl from "../../images/girl.png";

export const StyledHero = styled.section`
  width: 1920px;
  height: 779px;
  background-color: var(--body-color);
  margin: 0 auto;
  scroll-snap-align: center;
  *,
  ::before,
  ::after {
    box-sizing: content-box;
  }

  h1 {
    color: var(--title-color);
    text-transform: uppercase;
    font-size: 116px;
    font-family: "700-Montserrat";
    margin-bottom: 40px;
    line-height: normal;
  }

  h1 span {
    display: inline-block;
    width: 316px;
    height: 86px;
    background-position: center center;
    background-repeat: no-repeat;
    margin-right: 31px;
    border-radius: 200px;
    border: 2px solid var(--yellow);
    background-image: url(${girl});
    vertical-align: middle;
    animation: pulsate-fwd 0.5s ease-in-out 0.3s 1 both;
  }

  h1 > span:first-child {
    width: 483px;
    margin: 0 0 0 40px;
    background-image: url(${computerBoy});
    animation: pulsate-fwd 0.5s ease-in-out 1 both;
  }

  & > div {
    width: 100%;
    height: 779px;
    display: flex;
    margin-left: 178px;
    padding-top: 100px;
    margin: 0 auto;
    padding-left: 178px;
  }

  & > div > div:first-child {
    width: 904px;
    height: 675px;
  }

  & > div > div > div {
    position: relative;
  }

  div + div {
    padding-top: 139px;
    width: 766px;
    margin: 0;
    display: block;
    overflow: hidden;
    height: 781.5px;
  }

  div + div > div {
    padding: 0;
  }

  p {
    width: 772px;
    font-size: 28px;
  }

  p > span {
    font-family: "700-Montserrat";
  }

  h1.large {
    font-size: 60px;
    line-height: 116px;
  }

  h1.large span:first-child {
    width: 400px;
  }

  button{
    animation: pulsate-fwd 0.5s ease-in-out 0.6s 1 both;
  }

  @keyframes slide-in-elliptic-bottom-bck {
  0% {
    -webkit-transform: translateY(600px) rotateX(-30deg) scale(6.5);
            transform: translateY(600px) rotateX(-30deg) scale(6.5);
    -webkit-transform-origin: 50% -100%;
            transform-origin: 50% -100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 500px;
            transform-origin: 50% 500px;
    opacity: 1;
  }
}

  @keyframes pulsate-fwd {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
            transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

`;
