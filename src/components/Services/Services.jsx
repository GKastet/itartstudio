import {
  // Container,
  StyledSection,
  StyledServicesDescription,
} from "./Services.styled";
import icons from "../../assets/icons.svg";
import ServicesWrapperCards from "./ServicesWrapperCards/ServicesWrapperCards";
import getSectionContent from "../../helpers/getSectionContent";
import { useLang } from "../../langContext";

function Services() {
  const { lang } = useLang();

  const { title, description, cards, button_text } = getSectionContent(
    lang,
    "services"
  );
  // const language = {[lang]: true}

  return (
    <StyledSection id="services" $lang={lang}>
      {/* <Container> */}
      <div>
        <h2>
          {title}
          <svg width="248px" height="72px" viewBox="0 0 110 32">
            <use href={icons + "#outline_text"}></use>
          </svg>
        </h2>
        <StyledServicesDescription
          dangerouslySetInnerHTML={{ __html: description }}
        ></StyledServicesDescription>
      </div>
      <ServicesWrapperCards cards={cards} btn_text={button_text} />
      {/* </Container> */}
    </StyledSection>
  );
}

export default Services;
