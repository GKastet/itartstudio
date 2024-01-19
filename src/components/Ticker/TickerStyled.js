import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 348px;
  overflow: hidden;
  background-color: var(--white);
`;

const scroll = keyframes`
 from{
     left:translateX(0);
 }
 to{
    transform :translateX(-100%);
 }
 `;

export const TickerBox = styled.div`
  display: flex;
  height: 60px;
  align-items: center;

  &.black {
    width: calc(100% + 700px);
    color: var(--white);
    background-color: var(--black);
    transform: rotate(calc(8 * 1deg)) translateY(calc(200 * 1px));
  }

  &.yellow {
    width: calc(100% + 600px);
    color: var(--black);
    background-color: var(--yellow);
    transform: rotate(calc(-8 * 1deg)) translateY(calc(100 * 1px))
      translateX(-30px);
  }

  p {
    font-family: "700-proxima-nova";
    font-size: 38px;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    white-space: nowrap;
    animation: ${scroll} 20s linear infinite;
    animation-direction: reverse;
  }
`;
