import styled from "styled-components";
import PropTypes from "prop-types";

function RedesignCard({ handleClickCard }) {
  return (
    <StyledRedesignCard id="3" onClick={handleClickCard} className="active">
      <h3>Redesign</h3>
    </StyledRedesignCard>
  );
}

export default RedesignCard;

const StyledRedesignCard = styled.div`
  position: absolute;
  left: 0;
  top: 258px;
  width: 100%;
  max-width: 1564px;
  height: 600px;
  border-radius: 40px;

  z-index: 3;
  background-color: green;

  padding: 40px 0 48px 660px;
  transition: transform linear 1s, background-color linear 1s;

  h3 {
    color: #1c0f0f;
    font-family: "700-proxima-nova";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &.change-position-3-to-1 {
    background-color: #d5d73a;
    z-index: 1;
    transform: translateY(-258px);
  }

  &.change-position-3-to-2 {
    background-color: #d5d73a;
    z-index: 2;
    transform: translateY(-129px);
  }
`;

RedesignCard.propTypes = {
  handleClickCard: PropTypes.func,
};
