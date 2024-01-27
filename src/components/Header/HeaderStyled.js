import styled from "styled-components";

export const HeaderWrapper = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  color: var(--main-text-color);
`;

export const HeaderBox = styled.div`
  /* outline: 1px solid red; */
  box-sizing: border-box;
  width: 100%;
  max-width: 1300px;
  padding: 16px;
  border-radius: 200px;
  background: var(--white);
  box-shadow: var(--header-shadow);
  display: flex;
  justify-content: space-between;
`;

export const SectionsList = styled.ul`
  /* outline: 1px solid blue; */
  width: 380px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* font-family: Montserrat; */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* li { */
  /* outline: 1px solid red; */
  /* a {
      cursor: pointer;
      padding: 4px 8px;
      color: var(--main-text-color);
      border: var(--transparent-border);
      border-radius: 200px;
      transition: border var(--transition-general);

      &:hover,
      &:focus {
        outline-color: transparent;
        border: var(--yellow-border); */
  /* font-weight: bold; */
  /* }
    }
  } */

  a {
    cursor: pointer;
    padding: 4px 8px;
    color: var(--main-text-color);
    /* border: var(--transparent-border); */
    border-radius: 200px;

    position: relative;
    overflow: hidden;
    outline: none;
    &::before {
      box-sizing: border-box;
      transform: translateX(100%);
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      border-bottom: 2px solid transparent;
      border-left: 2px solid transparent;
      border-radius: 200px;
    }
    &::after {
      box-sizing: border-box;
      transform: translateX(-100%);
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      border-top: 2px solid transparent;
      border-right: 2px solid transparent;
      border-radius: 200px;
    }

    &:hover::before {
      transition: 100ms transform linear, 100ms height linear 100ms;
      transform: translateX(0);
      height: 100%;
      border-color: #e7f63c;
    }
    &:hover::after {
      transition: 100ms transform linear 200ms, 100ms height linear 300ms;
      transform: translateX(0);
      height: 100%;
      border-color: #e7f63c;
    }
  }

  &.listMargin {
    margin-left: 100px;
  }
  &.rightSide {
    /* outline: 1px solid green; */
    width: 500px;
  }
`;
export const LogoBox = styled.div`
  /* outline: 1px solid green; */
  width: 150px;
  height: 68px;
  outline-color: transparent;
  border-color: transparent;
  a {
    outline-color: transparent;
    border-color: transparent;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const BtnOrder = styled.button`
  width: 182px;
  padding: 22px;
  border-radius: 200px;
  display: inline-flex;
  padding: 22px;
  justify-content: center;
  align-items: center;
  border: var(--transparent-border);
  background-color: var(--yellow);
  transition: background-color var(--transition-general),
    border var(--transition-general);
  &:hover,
  &:focus {
    outline-color: transparent;
    border: var(--yellow-border);
    background-color: var(--white);
  }
`;
