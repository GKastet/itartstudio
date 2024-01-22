import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
import { BtnCloseStyled } from "./BtnCloseModalStyled";

const BtnCloseModal = ({ handleClickBtnClose }) => {
  return (
    <BtnCloseStyled type="button" onClick={handleClickBtnClose}>
      <AiOutlineClose size={24} fill="var(--fill-color-red)" />
    </BtnCloseStyled>
  );
};

BtnCloseModal.propTypes = {
  handleClickBtnClose: PropTypes.func.isRequired,
};

export default BtnCloseModal;
