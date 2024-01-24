import { BtnOrderStyled } from "./BtnOrderStyled";

const BtnOrder = ({ ...restProps }) => {
  const handleClickBtn = () => {
    console.log("CLICK button DISCUSS");
  };
  return <BtnOrderStyled onClick={handleClickBtn} {...restProps} />;
};

export default BtnOrder;
