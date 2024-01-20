import styled from "styled-components";
import PropTypes from "prop-types";
import active_bckground from "../../../assets/images/active_card.png";
import notactive_bckground from "../../../assets/images/notactive_card.png";

function LandingCard({ handleClickCard }) {
  return (
    <StyledLandingCard id="1" onClick={handleClickCard}>
      <h3>Landing pages</h3>
    </StyledLandingCard>
  );
}

export default LandingCard;

const StyledLandingCard = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  max-width: 1564px;
  height: 602px;
  border-radius: 40px;
  background-image: url(${notactive_bckground});
  box-shadow: 0px 0px 80px 0px rgba(204, 204, 204, 0.4);
  z-index: 1;
  padding: 40px 0 48px 660px;

  transition: transform cubic-bezier(0.61, -0.55, 0.49, 1.52) 450ms,
    background-color linear 450ms, background-image linear 450ms,
    color linear 450ms, box-shadow linear 450ms;

  h3 {
    color: #1c0f0f;
    font-family: "700-proxima-nova";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &.change-position-1-to-3 {
    z-index: 3;
    transform: translateY(248px);
  }

  &.change-position-2-to-3 {
    z-index: 3;
    transform: translateY(248px);
  }

  &.change-position-3-to-2 {
    z-index: 2;
    transform: translateY(124px);
  }

  &.active {
    background-image: url(${active_bckground});
    color: #fff;
    box-shadow: none;
  }
  &.active h3 {
    color: #fff;
  }
`;

LandingCard.propTypes = {
  handleClickCard: PropTypes.func,
};
