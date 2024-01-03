import styled from "styled-components";


export const SelectWrapper = styled.div`
outline: 1px solid red;
  position: relative;
  display: flex;
  gap: 8px;
`;

export const ButtonStyled = styled.button`

/* width: 40px;
height: 40px; */
width: 60px;
height: 60px;
border-radius: 50%;
background-color: transparent;
/* border: 1px solid var(--text-color-blue); */
border: 1px solid blue;
/* color: var(--text-color-blue); */
transition: border var(--transition-general), color var(--transition-general);

&:hover{
    /* border: 1px solid var(--text-color-red); */
    /* color: var(--text-color-red);   */
    border: 1px solid red;
    color: red;
}  
`;


export const LanguageList = styled.ul`
outline: 1px solid green;
display: none;
  &.openSelect {
    //height: 126px;
    /* overflow-y: auto; */
    display: flex;
    flex-direction: column;
    gap: 6px;
    position: absolute;
    /* left: 0; */
    right: 0;
    top: calc(100% + 8px);
    //width: 100%;
    padding: 15px 10px;
    background: var(--background-main);    
    background-image: linear-gradient(
    to bottom,
    var(--background-header),
    var(--background-main)
  );
    border-radius: 20px;
    font-family: GilroyRegular, sans-serif;
    color: var(--text-color-100);
  }
  /* &::-webkit-scrollbar {
    width: 5px;
    scrollbar-width: thin;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0077ff;
  } */
`

export const LangItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  color: red;
`;