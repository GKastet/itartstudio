import styled from "styled-components";

export const FeaturesItemInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  gap: 12px;
`;

export const FeaturesItemTitle = styled.h3`
  font-family: "700-Montserrat";
  font-size: 50px;
  line-height: 1.2;
  color: var(--main-text-color);
`;

export const FeaturesItemContent = styled.p`
  font-family: "400-NotoSans";
  font-size: 20px;
  line-height: 1.5;
  color: var(--primary-text-color);
`;

export const FeaturesItemWrapperS = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  max-width: 508px;
  width: 100%;
  /* min-height: 240px;
  height: 100%; */
  /* margin-top: 10px;
  margin-bottom: 10px; */
  background-color: var(--gray-background-color);
  border-radius: 20px;

  &.corner-top {
    padding: 69px 60px 68px;
    &::before {
      content: "";
      position: absolute;
      width: 32px;
      height: 32px;
      top: 0;
      right: 64px;
      background-color: transparent;
      border-top-right-radius: 26px;
      box-shadow: 6px -9px var(--white);
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
      box-shadow: 6px -8px var(--white);
      z-index: 10;
    }
  }

  &.corner-bottom {
    padding: 60px 60px;
    &::before {
      content: "";
      position: absolute;
      width: 32px;
      height: 32px;
      bottom: 0;
      right: 64px;
      background-color: var(--gray-background-color);
      border-bottom-right-radius: 26px;
      box-shadow: 8px 7px var(--white);
      z-index: 10;
    }

    &::after {
      content: "";
      position: absolute;
      width: 32px;
      height: 32px;
      bottom: 64px;
      right: 0;
      background-color: var(--gray-background-color);
      border-bottom-right-radius: 26px;
      box-shadow: 8px 7px var(--white);
      z-index: 10;
    }
  }
`;

export const CircleWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 64px;
  height: 64px;
  background-color: var(--white);

  &.corner-top {
    top: 0;
    border-bottom-left-radius: 60%;
    border-top-right-radius: 20px;
  }

  &.corner-bottom {
    bottom: 0;
    border-top-left-radius: 60%;
    border-bottom-right-radius: 20px;
  }
`;

export const CircleBox = styled.div`
  position: absolute;
  right: 0;
  width: 56px;
  height: 56px;
  background-color: var(--gray-background-color);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  &.corner-top {
    top: 0;
    &.flash {
      &::before {
        content: "⚡";
        font-size: 20px;
        font-weight: 500;
        line-height: 1.5;
      }
    }
    &.fire {
      &::before {
        content: "🔥";
        font-size: 20px;
        font-weight: 500;
        line-height: 1.5;
      }
    }
  }

  &.corner-bottom {
    bottom: 0;
    &.flag {
      &::before {
        content: "🇪🇺";
        font-size: 20px;
        font-weight: 500;
        line-height: 1.5;
      }
    }
  }
`;
