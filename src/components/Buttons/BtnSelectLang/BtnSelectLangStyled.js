import styled from "styled-components";

export const SelectWrapper = styled.div`
  /* outline: 1px solid red; */  
  position: relative;
  display: flex;  
`;

export const ButtonStyled = styled.button`  
  padding: 4px 8px;
  background-color: transparent;  
  border: var(--transparent-border);  
  /* outline-color: transparent; */
  border-radius: 200px;
  transition: border var(--transition-general);  

  &:hover, &:focus {
    outline-color: transparent;
    border: var(--yellow-border);
  }
`;

export const LanguageList = styled.ul`
  /* outline: 1px solid var(); */  
  display: none;
  &.openSelect {    
    display: flex;
    flex-direction: column;
    gap: 6px;
    position: absolute;    
    right: 0;
    top: calc(100% + 8px);    
    padding: 15px 10px;
    background: var(--white);
    background-image: linear-gradient(
      to bottom,
      var(--white),
      var(--gray-background-color)
    );
    border-radius: 20px;
    /* font-family: GilroyRegular, sans-serif; */
    color: var(--main-text-color);
  }  
`;

export const LangItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;  
`;
