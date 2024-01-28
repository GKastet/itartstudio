import { GoPlus } from "react-icons/go";
import styled from "styled-components";

export const SectionQuestion = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 120px;
`

export const TitleFAQs = styled.h2`
color: var(--Text-Title, #1C0F0F);
font-family: "700-Montserrat" ;
font-size: 50px;
font-style: normal;
font-weight: 700;
margin-bottom: 80px;
`

export const ListQuestions = styled.ul`
display: grid;
gap:40px;`

export const ItemQuestion = styled.li`
width: 1168px;
`

export const Line = styled.div`
width: 1036px;
border-bottom: 1px solid var(--Grey, #AEAEAE);
`

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
`

export const TitleQuestion = styled.p`
color: var(--Text-Title, #1C0F0F);
font-family: "700-Montserrat";
font-size: 24px;
font-weight: 700;
`

export const ButtonPlus = styled.button`
border-radius: 50%;
background: var(--Primary, #E7F63C);
padding:21px;
border: none;`


export const Plus = styled(GoPlus)`
width: 32px;
height: 28px;
`

export const ParagraphQuestion = styled.p`
width: 904px;
color: var(--Text-Primary, #2A2828);
font-family: "Noto Sans";
font-size: 20px;
font-weight: 400;
line-height: 30px;
margin-bottom: 40px;`