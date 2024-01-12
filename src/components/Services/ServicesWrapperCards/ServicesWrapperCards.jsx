import makeClassesServicesCards from "../../../helpers/makeClassesServicesCards";
import CorporateCard from "../ServicesCards/CorporateCard";
import LandingCard from "../ServicesCards/LandingCard";
import RedesignCard from "../ServicesCards/RedesignCards";
import { StyledServicesWrapperCards } from "./StyledServicesWrapperCards.styled";

const PLACE_ACTIVE_CARD = 3;

function ServicesWrapperCards() {
  const handleClickCard = (event) => {
    const selectedCard = event.currentTarget;
    const activeCard = document.querySelector(".active");
    const isNotActiveCard = selectedCard.id !== activeCard.id;
    const classSelectedConfirmingMove = Array.from(selectedCard.classList).find(
      (classes) => classes.includes("position")
    );
    const classActiveConfirmingMove = Array.from(activeCard.classList).find(
      (classes) => classes.includes("position")
    );

    if (isNotActiveCard) {
      const newClasses = makeClassesServicesCards(
        selectedCard,
        classSelectedConfirmingMove,
        PLACE_ACTIVE_CARD
      );

      classSelectedConfirmingMove
        ? selectedCard.classList.replace(
            classSelectedConfirmingMove,
            newClasses.selected_class
          )
        : selectedCard.classList.add(newClasses.selected_class);

      classActiveConfirmingMove
        ? activeCard.classList.replace(
            classActiveConfirmingMove,
            newClasses.active_class
          )
        : activeCard.classList.add(newClasses.active_class);

      selectedCard.classList.toggle("active");
      activeCard.classList.toggle("active");
    } else return;
  };

  return (
    <StyledServicesWrapperCards>
      <LandingCard handleClickCard={handleClickCard} />
      <CorporateCard handleClickCard={handleClickCard} />
      <RedesignCard handleClickCard={handleClickCard} />
    </StyledServicesWrapperCards>
  );
}

export default ServicesWrapperCards;
