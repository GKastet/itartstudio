import styled from "styled-components";
import computerBoy from "../../images/computerBoy.png"
import girl from "../../images/girl.png"

export const StyledHero = styled.section`
  width: 100%;
  height: 1225px;
  background-color: white;
  padding-top: 96px;
  margin: 0 auto;

  h1{
    color: #1C0F0F;
    text-transform: uppercase;
    font-size: 120px;
    font-weight: 700px;
    margin-bottom: 45px;
  }

  h1 span{ 
    display: inline-block;
    width: 356px;
    height: 82px;
    background-image: url(${girl});
  }

  h1 > span:first-child{
    width: 511px;
    background-image: url(${computerBoy});
    margin-left: 40px;
  }

  & > div {
    display: flex;
    margin-left: 178px;
    gap: 214px;
  }

 & > div > div:first-child {
    outline: 1px solid blue;
    width: 842px;
    height: 639px;
    position: relative;
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
