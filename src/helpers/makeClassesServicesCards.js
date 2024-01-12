export default function makeClassesServicesCards(
  selectedCard,
  classSelectedConfirmingMove,
  PLACE_ACTIVE_CARD
) {
  let classes = {};

  if (classSelectedConfirmingMove) {
    const classArrDetails = classSelectedConfirmingMove.split("-");
    [classArrDetails[2], classArrDetails[4]] = [
      classArrDetails[4],
      classArrDetails[2],
    ];
    classes.selected_class = classArrDetails.join("-");
    classes.active_class = classSelectedConfirmingMove;
    return classes;
  } else {
    classes.selected_class = `change-position-${selectedCard.id}-to-${PLACE_ACTIVE_CARD}`;
    classes.active_class = `change-position-${PLACE_ACTIVE_CARD}-to-${selectedCard.id}`;
  }
  return classes;
}
