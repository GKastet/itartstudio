import styled from "styled-components";
import PropTypes from "prop-types";

function CorporateCard({ handleClickCard }) {
  return (
    <StyledCorporateCard id="2" onClick={handleClickCard}>
      <h3>Corporate websites</h3>
    </StyledCorporateCard>
  );
}

export default CorporateCard;

const StyledCorporateCard = styled.div`
  position: absolute;
  left: 0;
  top: 129px;
  width: 100%;
  max-width: 1564px;
  height: 600px;
  border-radius: 40px;

  z-index: 2;
  background-color: #d3a0a0;

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

  &.change-position-1-to-3 {
    background-color: green;
    z-index: 3;
    transform: translateY(129px);
  }

  &.change-position-2-to-3 {
    background-color: green;
    z-index: 3;
    transform: translateY(129px);
  }

  &.change-position-3-to-1 {
    background-color: #d3a0a0;
    z-index: 1;
    transform: translateY(-129px);
  }
`;

CorporateCard.propTypes = {
  handleClickCard: PropTypes.func,
};
