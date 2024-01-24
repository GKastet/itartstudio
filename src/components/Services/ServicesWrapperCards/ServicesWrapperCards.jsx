import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import makeClassesServicesCards from "../../../helpers/makeClassesServicesCards";
import BtnOrder from "../../Buttons/BtnOrder/BtnOrder";
// import CorporateCard from "../ServicesCards/CorporateCard";
// import LandingCard from "../ServicesCards/LandingCard";
// import RedesignCard from "../ServicesCards/RedesignCards";
import { StyledServicesWrapperCards } from "./StyledServicesWrapperCards.styled";
import Card from "../ServicesCard/Card";

const PLACE_ACTIVE_CARD = 3;

function ServicesWrapperCards({ cards }) {
  console.log("cards: ", cards);
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
    <>
      <StyledServicesWrapperCards>
        {/* <LandingCard handleClickCard={handleClickCard} />
        <CorporateCard handleClickCard={handleClickCard} />
        <RedesignCard handleClickCard={handleClickCard} /> */}
        {cards.map((card, idx) => {
          return (
            <Card
              key={nanoid()}
              dataName={card.card_name}
              handleClickCard={handleClickCard}
              id={idx + 1}
              className={`${card.card_name} ${
                card.card_name === "redesign" && "active"
              }`}
              card={card}
            />
          );
        })}
        <BtnOrder />
      </StyledServicesWrapperCards>
    </>
  );
}

export default ServicesWrapperCards;

ServicesWrapperCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};
