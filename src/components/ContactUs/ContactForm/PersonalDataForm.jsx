import PropTypes from "prop-types";
import { Formik } from "formik";
// import { defaultCountries, parseCountry } from "react-international-phone";
import {
  BtnSubmitS,
  ErrorWrapper,
  ErrorsStyled,
  FormStyled,
  InputS,
  InputWrapper,
  LabelS,
  PhoneInputS,
  PhoneWrapperS,
} from "./ContactFormStyled";
import DropdownArrow from "../DropdownArrow/DropdownArrow";


const PersonalDataForm = ({ data, next, validationSchema}) => {

  // const countries = defaultCountries.filter((country) => {
  //   const { iso2 } = parseCountry(country);
  //   return ["us", "sk", "pl", "ua", "be", "ca", "cn", "cy", ].includes(iso2);
  // });

  const handleSubmit = (values) => {
    next(values);
  };

  // const handleBlur = (field) => () => {
  //   formik.setFieldTouched(field, true, true);
  //   formik.validateField(field);
  // };

  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <FormStyled noValidate>
          <InputWrapper>
            <LabelS htmlFor="username">What’s your name?*</LabelS>
            <InputS
              id="username"
              label="Username"
              name="username"
              type="text"
              value={formik.values.username}
              placeholder="Name"
              // autoComplete="off"
              onChange={formik.handleChange}
              style={{textTransform: "capitalize"}}
              // onBlur={handleBlur("username")}
            />
            <ErrorWrapper>
              {formik.touched.username && formik.errors.username ? (
                <ErrorsStyled>{formik.errors.username}</ErrorsStyled>
              ) : null}
            </ErrorWrapper>
          </InputWrapper>

          <InputWrapper>
            <PhoneWrapperS>
              <LabelS htmlFor="phone">What’s your Phone number?*</LabelS>
              <PhoneInputS
                id="phone"
                label="phone"
                name="phone"
                type="tel"
                value={formik.values.phone}
                onChange={(phone) => formik.setFieldValue("phone", phone)}
                // onBlur={() => handleBlur("phone")}
                // onBlur={() => formik.setFieldTouched("phone", true)}
                defaultCountry="ua"
                // countries={countries}
                // charAfterDialCode="50 147 5676"
                // defaultArrow={<DropdownArrow />}
                inputProps={{
                  // required: true,
                  // placeholder: "50 147 5676",
                  name: "phone",
                  autoFocus: true,
                  disabled: false,
                  // onFocus: () => {},
                  // onChange: (phone) => formik.setFieldValue("phone", phone),
                  // !!!!!!!!!!!!!!!!!
                  // onBlur: () => formik.setFieldTouched("phone", true),
                  // !!!!!!!!!!!!!!!!!
                  // onBlur: () => {handleBlur("phone")
                  // },
                }}
                countrySelectorArrow={<DropdownArrow />}
                // forceDialCode={true}

                // disableDialCodeAndPrefix={true}
                // showDisabledDialCodeAndPrefix={true}

                // label="PhoneNumber"
                // showDisabledDialCodeAndPrefix={true}
                // disableFocusAfterCountrySelect={true}
              />
            </PhoneWrapperS>
            <ErrorWrapper>
              {formik.touched.phone && formik.errors.phone ? (
                <ErrorsStyled>Phone is invalid</ErrorsStyled>
              ) : null}
            </ErrorWrapper>
          </InputWrapper>

          <InputWrapper>
            <LabelS htmlFor="email">And your email address?*</LabelS>
            <InputS
              id="email"
              label="Email"
              name="email"
              type="email"
              value={formik.values.email}
              placeholder="hellocreative@example.com"
              // autoComplete="off"
              onChange={formik.handleChange}
              // onBlur={handleBlur("email")}
            />
            <ErrorWrapper>
              {formik.touched.email && formik.errors.email ? (
                <ErrorsStyled>{formik.errors.email}</ErrorsStyled>
              ) : null}
            </ErrorWrapper>
          </InputWrapper>

          <BtnSubmitS type="submit" style={{ marginTop: 20 }}>
            Explain Project idea
          </BtnSubmitS>
        </FormStyled>
      )}
    </Formik>
  );
};

PersonalDataForm.propTypes = {
  data: PropTypes.any,
  next: PropTypes.func,
  validationSchema: PropTypes.any,
};

export default PersonalDataForm;
