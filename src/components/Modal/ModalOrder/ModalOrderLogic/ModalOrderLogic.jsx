import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOrderMarkUp from "../ModalOrderMarkUp/ModalOrderMarkUp";
import { ModalContainer, OverlayStyled } from "./ModalOrderLogicStyled";

const modalRoot = document.querySelector("#modal-root");

const ModalOrderLogic = ({isOpen, setIsOpen}) => {
  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add("no-scroll");

    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        document.body.classList.remove("no-scroll");
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      document.body.classList.remove("no-scroll");
      setIsOpen(false);
    }
  };

  const handleClickBtnClose = () => {
    document.body.classList.remove("no-scroll");
    setIsOpen(false);
  };

  return createPortal(
    <>
      <OverlayStyled onClick={handleClickOverlay}>
        <ModalContainer>
          {isOpen && (
            <ModalOrderMarkUp              
              handleClickBtnClose={handleClickBtnClose}
            />
          )}
        </ModalContainer>
      </OverlayStyled>
    </>,
    modalRoot
  );
}

ModalOrderLogic.propTypes={
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func
}

export default ModalOrderLogic