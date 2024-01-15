
import AdvantagesItem from "./AdvantagesItem";
import { Container } from "./AdvantagesStyled";

const Advantages = () => {

  return (
    <Container>
    <ul>
      <AdvantagesItem></AdvantagesItem>
      <AdvantagesItem variant="bottom-corner" />
      <AdvantagesItem />
    </ul>
    </Container>
  );
};

export default Advantages;
