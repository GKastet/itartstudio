import RepeatWord from "../../helpers/RepeatWord";
import { Container, TickerBox } from "./TickerStyled";

const TickerYellow = () => {
  return (
    <Container>
      <TickerBox className="yellow">
        <RepeatWord word="What we do &#8226; " count={8} />{" "}
        <RepeatWord word="What we do &#8226; " count={8} />
      </TickerBox>
    </Container>
  );
};

export default TickerYellow;
