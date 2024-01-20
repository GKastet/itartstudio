import { Container, StyledServicesDescription } from "./Services.styled";
import icons from "../../assets/icons.svg";
import ServicesWrapperCards from "./ServicesWrapperCards/ServicesWrapperCards";
import PropTypes from "prop-types";
import getSectionContent from "../../helpers/getSectionContent";

function Services({ lang, sectionName }) {
  const sectionContent = getSectionContent(lang, sectionName);
  console.log("sectionContent: ", sectionContent);

  return (
    <section id={sectionName}>
      <Container>
        <h2>
          {sectionContent.title}
          <svg width="219px" height="82.3px">
            <use href={icons + "#outline_text"}></use>
          </svg>
        </h2>
        <StyledServicesDescription>
          {sectionContent.description}
        </StyledServicesDescription>
        <ServicesWrapperCards />
      </Container>
    </section>
  );
}

export default Services;

Services.propTypes = {
  lang: PropTypes.string,
  sectionName: PropTypes.string,
};
