import { StyledSecondaryTitle } from "./SecondaryTitle.Styled";
import PropTypes from "prop-types";

function SecondaryTitle({children, className, ...restProps}) {
  return (
    <StyledSecondaryTitle className={className} {...restProps}>{children}</StyledSecondaryTitle>
  )
}

SecondaryTitle.propTypes = {
    children:PropTypes.node,
    className: PropTypes.string
  };

export default SecondaryTitle