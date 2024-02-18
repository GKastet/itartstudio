import ContactForm from "./ContactForm";
import { SectionS } from "./ContactUsStyled";
import TitleFormSection from "./TitleFormSection/TitleFormSection";

const ContactUs = () => {
  return (
    <SectionS>
      <TitleFormSection />
      <ContactForm />
    </SectionS>
  );
};

export default ContactUs;
