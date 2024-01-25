import styled from "styled-components";
import computerBoy from "../../images/computerBoy.png";
import girl from "../../images/girl.png";

export const StyledHero = styled.section`
  width: 100%;
  height: 1225px;
  background-color: var(--body-color);
  margin: 0 auto;
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
  }

  h1 > span:first-child {
    width: 483px;
    margin: 0 0 0 40px;
    background-image: url(${computerBoy});
  }

  & > div {
    width: 100%;
    height: 1225px;
    display: flex;
    margin-left: 178px;
    gap: 225px;
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
    padding-top: 78px;
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
`;
