import PropTypes from "prop-types";
import { Formik } from "formik";
import { LiaArrowLeftSolid } from "react-icons/lia";
import {
  BackBtn,
  BtnSubmitS,
  ButtonsWrapper,
  CheckboxS,
  ErrorWrapper,
  ErrorsStyled,
  FormStyled,
  IconCheckS,
  IconCheckWrapperS,
  InputS,
  InputWrapper,
  LabelCheckS,
  LabelS,
} from "./ContactFormStyled";

const DescriptionForm = ({ data, next, prev, validationSchema }) => {

  const handleSubmit = (values) => {
    next(values, true);
  };

  // const handleBlur = (field) => () => {
  //   formik.setFieldTouched(field, true, true);
  //   formik.validateField(field);
  // };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <FormStyled noValidate>
          <InputWrapper>
            <LabelS htmlFor="description">
              A few words about your project?*
            </LabelS>
            <InputS
              id="description"
              label="Project description"
              name="description"
              type="text"
              value={formik.values.description}
              placeholder="Start sharing here..."
              // autoComplete="off"
              onChange={formik.handleChange}
              style={{textTransform: "capitalize"}}
              // onBlur={handleBlur("description")}
            />
            <ErrorWrapper>
              {formik.touched.description && formik.errors.description ? (
                <ErrorsStyled>{formik.errors.description}</ErrorsStyled>
              ) : null}
            </ErrorWrapper>
          </InputWrapper>

          <InputWrapper>
            <LabelS htmlFor="text">I learned about your company through</LabelS>
            <InputS
              id="text"
              label="Where I learned about company"
              name="text"
              type="text"
              value={formik.values.text}
              placeholder="Upwork, Instagram, Dribbble etc. (optional)"
              // autoComplete="off"
              onChange={formik.handleChange}
              style={{textTransform: "capitalize"}}
              // onBlur={handleBlur("text")}
            />
            <ErrorWrapper>
              {formik.touched.text && formik.errors.text ? (
                <ErrorsStyled>{formik.errors.text}</ErrorsStyled>
              ) : null}
            </ErrorWrapper>
          </InputWrapper>

          <InputWrapper>
            <CheckboxS
              id="accept"
              name="accept"
              type="checkbox"
              value={formik.values.accept}
              onChange={formik.handleChange}
            />
            <LabelCheckS htmlFor="accept">
              <IconCheckWrapperS className="iconCheckWrap">
                <IconCheckS />
              </IconCheckWrapperS>
              By submitting this form, I agree to share my personal information.
            </LabelCheckS>
            <ErrorWrapper style={{ marginLeft: 24, marginBottom: 77 }}>
              {formik.touched.accept && formik.errors.accept ? (
                <ErrorsStyled>{formik.errors.accept}</ErrorsStyled>
              ) : null}
            </ErrorWrapper>
          </InputWrapper>

          <ButtonsWrapper>
            <BackBtn type="button" onClick={() => prev(formik.values)}>
              <LiaArrowLeftSolid size={32} />
            </BackBtn>
            <BtnSubmitS type="submit">Submit</BtnSubmitS>
          </ButtonsWrapper>
        </FormStyled>
      )}
    </Formik>
  );
};

DescriptionForm.propTypes = {
  data: PropTypes.any,
  next: PropTypes.func,
  prev: PropTypes.func,
  validationSchema: PropTypes.any,
};

export default DescriptionForm;
