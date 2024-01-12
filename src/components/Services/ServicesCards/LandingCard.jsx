import styled from "styled-components";
import PropTypes from "prop-types";

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
  height: 600px;
  border-radius: 40px;
  background-color: #ada9a9;
  z-index: 1;
  padding: 40px 0 48px 660px;
  box-sizing: border-box;
  transition: transform linear 1s, background-color linear 1s;

  h3 {
    color: #1c0f0f;
    /* font-family: "Bold-proxima-nova"; */
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &.change-position-1-to-3 {
    background-color: green;
    z-index: 3;
    transform: translateY(258px);
  }

  &.change-position-2-to-3 {
    background-color: green;
    z-index: 3;
    transform: translateY(258px);
  }

  &.change-position-3-to-2 {
    background-color: #ada9a9;
    z-index: 2;
    transform: translateY(129px);
  }
`;

LandingCard.propTypes = {
  handleClickCard: PropTypes.func,
};
