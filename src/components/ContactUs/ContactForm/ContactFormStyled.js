import styled from "styled-components";
import { Form } from "formik";
import { PhoneInput } from "react-international-phone";
import { GoCheck } from "react-icons/go";
import icon from "../../../assets/icons.svg#dropdown-arrow";

// export const SectionS = styled.section`
//   max-width: 1920px;
//   width: 100%;
//   margin: 0 auto;
//   padding: 76px 0 60px;
//   background-color: var(--body-color);
// `;

// export const FeatersSection = styled.div`
//   /* padding: 120px 178px 120px; */
//   padding: 0 178px;
// `;

export const FormStyled = styled(Form)`
  max-width: 640px;
  width: 100%;
`;

export const InputWrapper = styled.div``;

export const LabelS = styled.label`
  font-family: "700-Montserrat";
  font-size: 24px;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const InputS = styled.input`
  width: 100%;
  height: 73px;
  padding: 20px 0;
  border: none;
  border-bottom: 1px solid var(--grey-text-color);
  font-size: 24px;
  line-height: 1.3;
  outline: 1px solid transparent;
  background: transparent;
  color: var(--main-text-color);

  &::placeholder {
    font-family: "400-NotoSans";
    font-size: 24px;
    line-height: 1.3;
    color: var(--grey-text-color);
    background: transparent;
  }

  &:hover,
  &:focus {
    border-bottom-color: var(--yellow);
  }

  /* @media screen and (max-width: 768px) {
    font-size: 14px;
    &::placeholder {
      line-height: 1.1;
    }
  } */
`;

export const PhoneWrapperS = styled.div`
  border-bottom: 1px solid var(--grey-text-color);
`;

export const PhoneInputS = styled(PhoneInput)`
  --react-international-phone-height: 33px;
  --react-international-phone-background-color: transparent;
  --react-international-phone-text-color: var(--main-text-color);
  --react-international-phone-font-size: 24px;
  --react-international-phone-border-color: transparent;
  .react-international-phone-input {
    width: 100%;
  }

  font-family: "400-NotoSans";
  line-height: 1.3;
  color: var(--grey-text-color);
  padding: 20px 4px 20px 0%;

  /* Button dropdown */
  button.react-international-phone-country-selector-button {
    /* width: 80px; */
    margin-right: 0;
    &:hover,
    &:focus {
      background-color: transparent;
    }
  }

  /* Flag */
  .react-international-phone-country-selector-button
    > div
    > .react-international-phone-flag-emoji.react-international-phone-country-selector-button__flag-emoji {
    margin: 0;
  }
  --react-international-phone-flag-width: 32px;

  /* Arrow */
  .react-international-phone-country-selector-button
    > div
    > .react-international-phone-country-selector-button__dropdown-arrow {
    margin-left: 8px;
    margin-right: 0;
    border-radius: 88px;
    border-bottom-left-radius: 88px;
    border-bottom-right-radius: 88px;
  }
  --react-international-phone-country-selector-arrow-size: 6px;
  --react-international-phone-country-selector-arrow-color: var(
    --main-text-color
  );

  /* Dropdown */
  --react-international-phone-dropdown-item-font-size: 22px;
  --react-international-phone-dropdown-item-text-color: var(--main-text-color);
  --react-international-phone-dropdown-item-height: 24px;
  --react-international-phone-dropdown-item-background-color: var(--body-color);
  --react-international-phone-dropdown-item-dial-code-color: var(
    --grey-text-color
  );
  /* --react-international-phone-dropdown-top: 34px; */
  /* --react-international-phone-dropdown-preferred-list-divider-color: green; */

  --react-international-phone-width: 100%;
  --react-international-phone-border-bottom: 1px solid black;

  /* --react-international-phone-country-selector-arrow-backgroung-image: url(${icon +
  "#dropdown-arrow"}); */

  .react-international-phone-country-selector-dropdown {
    outline: none;
    width: 640px;
  }

  .react-international-phone-dial-code-preview {
    margin-left: 20px;
    padding: 0;
  }
  ::placeholder {
    color: var(--grey-text-color);
  }

  .react-international-phone-country-selector-button {
    &__dropdown-arrow {
      border-radius: 88px;
      border-bottom-left-radius: 88px;
      border-bottom-right-radius: 88px;
    }
  }
`;

export const ErrorWrapper = styled.div`
  height: 40px;
`;

export const ErrorsStyled = styled.p`
  font-size: 14px;
  line-height: 1.1;
  color: #ee1b0a;
`;

export const CheckboxS = styled.input`
  position: absolute;
  width: 2px;
  height: 2px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;

  /* &:hover + * .iconCheckWrap,
  &:focus + * .iconCheckWrap {
    border-color: var(--yellow);
  } */

  &:checked + * .iconCheckWrap {
    border-color: transparent;
    box-shadow: none;
    background-color: var(--yellow);
    color: var(--main-text-color);
  }
`;

export const IconCheckWrapperS = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  width: 16px;
  height: 16px;
  border: 1px solid var(--primary-text-color);
  border-radius: 2px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: transparent;
  cursor: pointer;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const IconCheckS = styled(GoCheck)`
  display: inline-block;
  width: 16px;
  height: 16px;
  color: currentColor;
  transform: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const LabelCheckS = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  font-family: "400-NotoSans";
  font-size: 14px;
  line-height: 1.5;
  color: var(--main-text-color);
  cursor: pointer;
`;

export const BtnSubmitS = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 302px;
  width: 100%;
  height: 82px;
  border-radius: 200px;
  font-size: 18px;
  font-weight: 1.2;
  text-transform: uppercase;
  color: var(--main-text-color);
  background-color: var(--yellow);
  border: transparent;
  transform: scale(1);
  transition: transform 250ms linear;

  &:hover,
  &:focus {
    transform: translateX(16px) scale(1.1);
  }

  /* @media screen and (max-width: 768px) {
    max-width: 295px;
    font-size: 14px;
  line-height: 1.1;
  } */
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const BackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 82px;
  border-radius: 50%;
  border: 2px solid var(--main-text-color);
  background-color: transparent;
  transition: transform 250ms linear;

  &:hover,
  &:focus {
    transform: translateX(-4px) scale(1.1);
  }
`;
