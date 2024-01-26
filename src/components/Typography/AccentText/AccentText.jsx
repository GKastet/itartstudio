import { StyledAccentText } from "./AccentText.styled";
import PropTypes from "prop-types";

function AccentText({children}) {
  return (
    <StyledAccentText>{children}</StyledAccentText>
  )
}

AccentText.propTypes = {
    children:PropTypes.node,
  };

export default AccentText