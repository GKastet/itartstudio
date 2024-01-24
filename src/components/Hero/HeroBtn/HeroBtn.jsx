import { StyledHeroBtn } from "./HeroBtn.styled";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import PropTypes from "prop-types";

function HeroBtn({children}) {
  return (
    <StyledHeroBtn>
      {children}
      <span>
        <HiOutlineArrowUpRight size="24" />
      </span>
    </StyledHeroBtn>
  );
}

HeroBtn.propTypes = {
  children:PropTypes.node,
};

export default HeroBtn;
