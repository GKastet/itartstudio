import { StyledHeroBtn } from "./HeroBtn.styled";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

function HeroBtn() {
  return (
    <StyledHeroBtn>
       let’s talk
      <span>
        <HiOutlineArrowUpRight size="24" />
      </span>
    </StyledHeroBtn>
  );
}

export default HeroBtn;
