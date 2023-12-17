import styled, { keyframes } from "styled-components";
import bgImg from '../../images/bg.png';

export const Container = styled.div`
color: #dde8eb;
padding: 0 20px;
    height: 100vh;
    background: url(${bgImg}) center/cover,
    linear-gradient(116deg, #212121 0%, #333 101.21%);
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled.h1`
padding: 20px;
font-size: 64px;
font-style: normal;
font-weight: 600;
line-height: normal;
background: linear-gradient(to right, #e8fc08, #e73576);
  -webkit-background-clip: text;
  color: transparent;
`

export const Paragraph = styled.p`
text-align: center;
max-width: 800px;
font-size: 28px;
line-height: normal;
background: linear-gradient(to right, #e8fc08, #e73576);
  -webkit-background-clip: text;
  color: transparent;
`

const flickerAnimation = keyframes`
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: 1;
  }
  20%, 23%, 63%, 69% {
    opacity: 0.8;
  }
  24%, 62%, 68% {
    opacity: 0.6;
  }
  65%, 67% {
    opacity: 0.4;
  }
`;

export const Time = styled.p`
  font-size: 8em;
  text-align: center;
  margin-top: 20px;
  animation: ${flickerAnimation} 1s infinite;
  transition: opacity 0.1s;
  font-weight: 400;

    
   &.shadow {text-shadow: 
    -5px -5px 7px #e2ecf060,
    2px 5px 4px #587cab,
    2px 2px 4px white;}

     &.flicker {
    filter: blur(1px);
    color: #e2ecf060;
    opacity: 0.5;
    transition: 0.1s;
  } 
`;

export const Image = styled.img`
  width: 550px;
  height: 400px;
`;
