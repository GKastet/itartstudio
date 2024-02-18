// import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { PhoneNumberUtil } from "google-libphonenumber";
import "react-international-phone/style.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import PersonalDataForm from "./PersonalDataForm";
import DescriptionForm from "./DescriptionForm";

const ContactForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    description: "",
    text: "",
    accept: false,
  });
  const [currentStep, setCurrentStep] = useState(0);

  const phoneUtil = PhoneNumberUtil.getInstance();
  const phoneValidation = (phone) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };

  const submitRequest = (newData) => {
    // (formData)
    console.log("form submit", newData);

    // e.preventDefault();
    // resetForm({newData: {
    //   username: "",
    // email: "",
    // phone: "",
    // description: "",
    // text: "",
    // accept: false,
    // }});

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        newData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setData({
            username: "",
            email: "",
            phone: "",
            description: "",
            text: "",
            accept: false,
          });
          setCurrentStep(0);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleNextForm = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      submitRequest(newData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const validationPersonalDataSchema = Yup.object({
    username: Yup.string()
      .min(2, "Too short")
      .max(50, "Too long")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    phone: Yup.string()
      .required("Phone is required")
      .test((value) => {
        const phone = value ? value : "";
        return phoneValidation(phone);
      }),
  });

  const validationDescriptionSchema = Yup.object({
    description: Yup.string()
      .min(2, "Too short")
      .max(50, "Up to 50 characters")
      .required("This field is required"),
    text: Yup.string()
      .min(2, "Too short!")
      .max(50, "Up to 50 characters")
      // .notRequired(),
      .optional(),
    accept: Yup.boolean().oneOf(
      [true],
      "Please accept the agreement to continue"
    ),
    // .required("You need to confirm the agreement to continue. / Please accept the terms of service"),
  });

  const steps = [
    <PersonalDataForm
      key={0}
      next={handleNextForm}
      data={data}
      validationSchema={validationPersonalDataSchema}
    />,
    <DescriptionForm
      key={1}
      next={handleNextForm}
      prev={handleBack}
      data={data}
      validationSchema={validationDescriptionSchema}
    />,
  ];

  return <div>{steps[currentStep]}</div>;
};

export default ContactForm;
