import { Container, StyledServicesDescription } from "./Services.styled";
import icons from "../../assets/icons.svg";
import ServicesWrapperCards from "./ServicesWrapperCards/ServicesWrapperCards";
import getSectionContent from "../../helpers/getSectionContent";
import { useLang } from "../../langContext";

function Services() {
  const { lang } = useLang();
  const { title, description, cards } = getSectionContent(lang, "services");

  return (
    <section id="services">
      <Container>
        <h2>
          {title}
          <svg width="248px" height="72px">
            <use href={icons + "#outline_text"}></use>
          </svg>
        </h2>
        <StyledServicesDescription>{description}</StyledServicesDescription>
        <ServicesWrapperCards cards={cards} />
      </Container>
    </section>
  );
}

export default Services;
