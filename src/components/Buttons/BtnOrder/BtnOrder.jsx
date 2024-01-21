import { BtnOrderStyled } from "./BtnOrderStyled";

const BtnOrder = () => {
  const handleClickBtn = () => {
    console.log("CLICK button DISCUSS");
  };
  return (
    <BtnOrderStyled onClick={handleClickBtn}>
      Discuss the project
    </BtnOrderStyled>
  );
};

export default BtnOrder;
