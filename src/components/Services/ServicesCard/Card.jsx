import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import { HiOutlineArrowUpRight } from "react-icons/hi2";
import icons from "../../../assets/icons.svg";
import { StyledCard } from "./StyledCard.styled";

function Card({ handleClickCard, card, id, dataName, className }) {
  const nameCard = { [card.card_name]: true };

  return (
    <>
      <StyledCard
        id={id}
        onClick={handleClickCard}
        $name={nameCard}
        data-name={dataName}
        className={className}
      >
        <div className="header-card-wrapper">
          <p> (0{+`${id}`})</p>
          <h3>{card.card_title}</h3>
          <span>
            <HiOutlineArrowUpRight size="48px" />
          </span>
        </div>

        <div className="img-thumb">
          <img
            src={card.img}
            alt={card.img_alt}
            width={"508px"}
            height={"442px"}
          />
        </div>
        <div className="text-content-card-wrapper">
          <ul>
            {card.main_actions_list.map((action) => {
              return <li key={nanoid()}>{action}</li>;
            })}
          </ul>
          <p>{card.card_description}</p>

          <h4>{card.advantages_list_title}:</h4>
          <ul>
            {card.advantages_list.map((advantage) => {
              return (
                <li key={nanoid()}>
                  <svg width="11.2px" height="11.76px">
                    <use href={icons + "#marker_list"}></use>
                  </svg>
                  {advantage}
                </li>
              );
            })}
          </ul>
        </div>
      </StyledCard>
    </>
  );
}

export default Card;

Card.propTypes = {
  handleClickCard: PropTypes.func,
  card: PropTypes.shape({
    card_name: PropTypes.string,
    card_title: PropTypes.string,
    img: PropTypes.string,
    img_alt: PropTypes.string,
    card_description: PropTypes.string,
    main_actions_list: PropTypes.arrayOf(PropTypes.string),
    advantages_list_title: PropTypes.string,
    advantages_list: PropTypes.arrayOf(PropTypes.string),
  }),
  id: PropTypes.number,
  dataName: PropTypes.string,
  className: PropTypes.string,
};
