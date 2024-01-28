import { StyledSectionDescription } from "./SectionDescription.Styled";
import PropTypes from "prop-types";

const SectionDescription = ({children, className, ...restProps}) => {
  return <StyledSectionDescription className={className} {...restProps}>{children}</StyledSectionDescription>;
}

SectionDescription.propTypes = {
  children:PropTypes.node,
  className: PropTypes.string
};

export default SectionDescription;
