import { Container, StyledServicesDescription } from "./Services.styled";
import icons from "../../assets/icons.svg";
import ServicesWrapperCards from "./ServicesWrapperCards/ServicesWrapperCards";
import PropTypes from "prop-types";
import getSectionContent from "../../helpers/getSectionContent";

function Services({ lang, name }) {
  const sectionContent = getSectionContent(lang, name);
  console.log("sectionContent: ", sectionContent);

  return (
    <section id="services">
      <Container>
        <h2>
          {sectionContent.title}
          {/* We deliver web design and development solutions */}
          <svg width="219px" height="82.3px">
            <use href={icons + "#outline_text"}></use>
          </svg>
        </h2>
        <StyledServicesDescription>
          {/* We offer our clients a transparent and{" "}
          <span className="accent-text">result-oriented</span> approach with a{" "}
          <span className="accent-text">clear process</span>, providing
          steadfast <span className="accent-text">guarantees</span> in our web
          development services. */}
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
  name: PropTypes.string,
};
