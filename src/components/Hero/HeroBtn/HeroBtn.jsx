import { StyledHeroBtn } from "./HeroBtn.styled";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

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

export default HeroBtn;
