import styled from "styled-components";

export const StyledHeroBtn = styled.button`
  text-transform: uppercase;
  font-size: 18px;
  color: var(--title-color);
  position: absolute;
  bottom: 28px;
  right: 73px;
  background-color: var(--yellow);
  width: 257px;
  height: 82px;
  border-radius: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px 0 52px;
  box-sizing: border-box;

  &.large{
    width: 350px;
    right: 130px;
  }

  & > span {
    width: 66px;
    height: 66px;
    display: inline-flex;
    border-radius: 50%;
    border: 1px solid var(--title-color);
    align-items: center;
    justify-content: center;
  }

  &:hover > span {
  background-color: var(--title-color);
  }

  &:hover > span > svg{
    stroke: #E7F600;
  }

  
`;
