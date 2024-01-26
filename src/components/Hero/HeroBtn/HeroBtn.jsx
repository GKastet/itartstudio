import { StyledHeroBtn } from "./HeroBtn.styled";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import PropTypes from "prop-types";

function HeroBtn({children, className}) {
  return (
    <StyledHeroBtn className={className}>
      {children}
      <span>
        <HiOutlineArrowUpRight size="24" />
      </span>
    </StyledHeroBtn>
  );
}

HeroBtn.propTypes = {
  children:PropTypes.node,
  className: PropTypes.string
};

export default HeroBtn;
