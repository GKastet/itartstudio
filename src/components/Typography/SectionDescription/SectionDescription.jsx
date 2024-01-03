import { StyledSectionDescription } from "./SectionDescription.Styled";
import PropTypes from "prop-types";

const SectionDescription = ({children}) => {
  return <StyledSectionDescription>{children}</StyledSectionDescription>;
}

SectionDescription.propTypes = {
  children:PropTypes.node,
};

export default SectionDescription;
