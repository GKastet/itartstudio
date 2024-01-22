import PropTypes from "prop-types";
import BtnCloseModal from "../../../Buttons/BtnCloseModal/BtnCloseModal";
import { ModalContainer } from "./ModalOrderMarkUpStyled";

const ModalOrderMarkUp = ({ handleClickBtnClose }) => {
  return (
    <ModalContainer>
      <div>ModalOrderMarkUp</div>
      <BtnCloseModal handleClickBtnClose={handleClickBtnClose} />
    </ModalContainer>
  );
};

ModalOrderMarkUp.propTypes = {
  handleClickBtnClose: PropTypes.func.isRequired,
};

export default ModalOrderMarkUp;
