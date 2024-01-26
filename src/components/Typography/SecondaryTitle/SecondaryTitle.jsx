import { StyledSecondaryTitle } from "./SecondaryTitle.Styled";
import PropTypes from "prop-types";

function SecondaryTitle({children, ...restProps}) {
  return (
    <StyledSecondaryTitle {...restProps}>{children}</StyledSecondaryTitle>
  )
}

SecondaryTitle.propTypes = {
    children:PropTypes.node,
  };

export default SecondaryTitle