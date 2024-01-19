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
  /* outline: 1px solid green; */
  display: flex;
  align-items: center;
  gap: 40px;
  /* font-family: Montserrat; */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  li {
    a {
      cursor: pointer;
      padding: 4px 8px;
      color: var(--main-text-color);
      border: 2px solid;
      border-color: transparent;
      border-radius: 200px;
      transition: border var(--transition-general);
      &:hover {
        border-color: var(--yellow);
        /* font-weight: bold; */
      }
    }
  }
  &.listMargin {
    margin-left: 130px;
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

export const BtnContactUs = styled.button`
  padding: 22px;
  border-radius: 200px;
  background-color: var(--yellow);
  display: inline-flex;
  padding: 22px;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  border-color: transparent;
  transition: background-color var(--transition-general);
  &:hover {
    border-color: var(--yellow);
    background-color: var(--white);
  }
`;
