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

  const { title, description, cards } = getSectionContent(lang, "services");

  return (
    <StyledSection id="services">
      {/* <Container> */}
      <div>
        <h2>
          {title}
          <svg width="248px" height="72px">
            <use href={icons + "#outline_text"}></use>
          </svg>
        </h2>
        <StyledServicesDescription
          dangerouslySetInnerHTML={{ __html: description }}
        ></StyledServicesDescription>
      </div>
      <ServicesWrapperCards cards={cards} />
      {/* </Container> */}
    </StyledSection>
  );
}

export default Services;
