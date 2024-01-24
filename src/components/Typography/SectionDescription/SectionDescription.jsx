import { StyledSectionDescription } from "./SectionDescription.Styled";
import PropTypes from "prop-types";

const SectionDescription = ({children, ...restProps}) => {
  return <StyledSectionDescription {...restProps}>{children}</StyledSectionDescription>;
}

SectionDescription.propTypes = {
  children:PropTypes.node,
};

export default SectionDescription;
