import styled from "styled-components";

export const FooterWrapper = styled.footer`
 /* outline: 1px solid red; */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  color: var(--main-text-color);
  scroll-snap-align: end;
`;

export const FooterBox = styled.div`
  outline: 1px solid orange;
  box-sizing: border-box;
  width: 100%;
  max-width: 1840px;
  padding: 80px 0;
  border-radius: 1000px;
  background: var(--main-text-color);
  display: flex;
`;

export const FooterTitle = styled.p`
  font-family: "400-Montserrat";
  font-size: 22px;
  font-style: normal;
  line-height: normal;
  padding: 0 8px;
  color: var(--grey);
`;

export const FooterNavList = styled.ul`
  /* outline: 1px solid green; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-left: 270px;
  font-family: "500-Montserrat";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  li {
    a {
      cursor: pointer;
      padding: 4px 8px;
      color: var(--white);
      border: 2px solid;
      border-color: transparent;
      border-radius: 200px;
      transition: border var(--transition-general);
      transition: scale var(--transition-general);
      &:hover {
        border-color: var(--yellow);
        scale: 1.05;
      }
    }
  }
`;

export const FoterSocialList = styled.ul`
/* outline: 1px solid yellow; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-left: 116px;
  font-family: "500-Montserrat";
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  li {
    a {
      cursor: pointer;
      padding: 4px 8px;
      color: var(--white);
      border: 2px solid;
      border-color: transparent;
      border-radius: 200px;
      transition: border var(--transition-general);
      transition: scale var(--transition-general);
      &:hover {
        border-color: var(--yellow);
        scale: 1.05;
      }
    }
  }
`;

export const FooterLogoList = styled.div`
/* outline: 1px solid yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 326px;
  margin: 0 auto;
  font-family: "500-Montserrat";
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  li {
    a {
      cursor: pointer;
      padding: 4px 8px;
      color: var(--white);
      border: 2px solid;
      border-color: transparent;
      border-radius: 200px;
      transition: border var(--transition-general);
      transition: scale var(--transition-general);
      &:hover {
        border-color: var(--yellow);
        scale: 1.05;
      }
    }
  }
`

export const LogoBox = styled.div`
  /* outline: 1px solid teal; */
  width: 201px;
  /* height: 90px; */
  outline-color: transparent;
  border-color: transparent;
  a {
    outline-color: transparent;
    border-color: transparent;
    img {
      width: 100%;
      /* height: 100%; */
    }
  }
`;

export const FooterTagline = styled.p`
  font-family: "400-Montserrat";
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  margin-top: 40px;
  color: var(--grey);
`;

export const CopyRight = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 90px;
  font-family: "400-Montserrat";
  font-size: 14px;
  font-style: normal;
  line-height: 1.5;
  color: var(--grey);
`


export const FooterContactsList = styled.ul`
/* outline: 1px solid tomato; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  font-family: "500-Montserrat";
  margin-right: 270px;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  li {
    a {
      cursor: pointer;
      padding: 4px 8px;
      color: var(--white);
      border: 2px solid;
      border-color: transparent;
      border-radius: 200px;
      transition: border var(--transition-general);
      transition: scale var(--transition-general);
      &:hover {
        border-color: var(--yellow);
        scale: 1.05;
      }
    }
  }
`;