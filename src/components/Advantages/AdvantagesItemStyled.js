import styled from "styled-components";

// export const AdvantagesItemWrapperStyled = styled.div`
//   /* flex-basis: calc((100% - 20px) / 3); */
// `;

// export const Container = styled.div`
//   position: relative;
//   width: 300px;
//   height: 200px;
//   background-color: #efefef;
//   overflow: hidden;
//   margin-top: 10px;
//   margin-bottom: 20px;
//   margin-left: 250px;
//   border-radius: 20px;
//   /* border-top-right-radius: */
// `;

// export const CornerBox = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 50px;
//   height: 50px;
//   /* border-radius: 50%; */
//   background-color: #fff;
//   border: 1px solid #000;
//   transform: rotate(45deg);
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 1px;
//     right: 1px;
//     width: 48px;
//     height: 48px;
//     background-color: #fff;
//     border-radius: 20px;
//   }
// `;

// export const CircleBox = styled.div`
//   position: absolute;
//   top: 5px;
//   right: 5px;
//   width: 40px;
//   height: 40px;
//   background-color: #3498db;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   font-weight: bold;
// `;

export const AdvantagesItemContent = styled.p`
  /* padding: 45px 60px;
  background-color: #efefef;
  border-radius: 20px;
  border-top-right-radius: -20px; */

  &.span {
    /* font-family: Proxima Nova-700; */
    font-size: 56px;
  }
`;

export const AdvantagesItemWrapperS = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  max-width: 508px;
  width: 100%;
  height: 240px;
  margin-top: 10px;
  margin-left: 20px;
  background-color: #efefef;
  border-radius: 20px;

  &::before {
    content: "";
    position: absolute;
    width: 32px;
    height: 32px;
    top: 0;
    right: 64px;
    background-color: transparent;
    border-top-right-radius: 26px;
    box-shadow: 6px -9px white;
    z-index: 10;
  }

  &::after {
    content: "";
    position: absolute;
    width: 32px;
    height: 32px;
    top: 64px;
    right: 0;
    background-color: transparent;
    border-top-right-radius: 26px;
    box-shadow: 6px -8px white;
    z-index: 10;
  }

  &.bottom-corner {
    &::before {
      content: "";
      position: absolute;
      width: 32px;
      height: 32px;
      bottom: 0;
      right: 64px;
      background-color: transparent;
      border-bottom-right-radius: 26px;
      box-shadow: 6px -9px white;
      z-index: 10;
    }

    &::after {
      content: "";
      position: absolute;
      width: 32px;
      height: 32px;
      top: 64px;
      right: 0;
      background-color: transparent;
      border-bottom-right-radius: 26px;
      box-shadow: 6px -8px white;
      z-index: 10;
    }
  }
`;

// export const AdvantagesItemWrapperS = styled.div`
// .box:nth-child(2) {

// }
// `;

export const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 64px;
  height: 64px;
  border-bottom-left-radius: 60%;
  border-top-right-radius: 20px;
  background-color: #ffff;

  &.bottom-corner {
    /* position: absolute; */
    bottom: 0;
    /* right: 0;
    width: 64px;
    height: 64px;
    border-bottom-left-radius: 60%;
    border-top-right-radius: 20px;
    background-color: #ffff; */
  }
`;

export const CircleBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 56px;
  height: 56px;
  background-color: #efefef;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;


  &.bottom-corner {
    /* position: absolute; */
    bottom: 0;
    /* right: 0;
    width: 56px;
    height: 56px;
    background-color: #efefef;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center; */
  } 
`;
