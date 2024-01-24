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

// const StyledCard = styled.li`
//   position: absolute;
//   left: 0;
//   top: ${(props) =>
//     props.$name.landing ? "0" : props.$name.corporate ? "124px" : "248px"};
//   width: 100%;
//   max-width: 1564px;
//   height: 602px;
//   padding-top: 40px;
//   border-radius: 40px;

//   background-image: url(${notactive_bckground});
//   background-size: cover;
//   background-repeat: no-repeat;
//   z-index: ${(props) =>
//     props.$name.landing ? "1" : props.$name.corporate ? "2" : "3"};
//   box-shadow: 0px 0px 80px 0px rgba(204, 204, 204, 0.4);

//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   color: var(--title-color);

//   transition: transform cubic-bezier(0.61, -0.4, 0.49, 1.36) 600ms,
//     background-color cubic-bezier(0.61, -0.4, 0.49, 1.36) 600ms,
//     background-image linear 600ms,
//     color cubic-bezier(0.61, -0.4, 0.49, 1.36) 600ms,
//     box-shadow cubic-bezier(0.61, -0.4, 0.49, 1.36) 600ms;

//   h3 {
//     margin-right: auto;
//     font-family: "700-Montserrat";
//     font-size: 36px;
//   }

//   &.change-position-1-to-3 {
//     z-index: 3;
//     transform: ${(props) =>
//       props.$name.landing
//         ? "translateY(248px)"
//         : props.$name.corporate
//         ? "translateY(124px)"
//         : "translateY(0px)"};
//   }

//   &.change-position-3-to-1 {
//     z-index: 1;
//     transform: ${(props) =>
//       props.$name.landing
//         ? "translateY(0px)"
//         : props.$name.corporate
//         ? "translateY(-124px)"
//         : "translateY(-248px)"};
//   }

//   &.change-position-2-to-3 {
//     z-index: 3;
//     transform: ${(props) =>
//       props.$name.landing
//         ? "translateY(248px)"
//         : props.$name.corporate
//         ? "translateY(124px)"
//         : "translateY(0px)"};
//   }

//   &.change-position-3-to-2 {
//     z-index: 2;
//     transform: ${(props) =>
//       props.$name.landing
//         ? "translateY(124px)"
//         : props.$name.corporate
//         ? "translateY(0px)"
//         : "translateY(-124px)"};
//   }

//   &.active {
//     background-image: url(${active_bckground});
//     color: var(--white);
//     box-shadow: none;
//   }
//   &.active h3 {
//     color: var(--white);
//   }
//   .header-card-wrapper {
//     padding: 0 40px;
//     display: flex;
//     align-items: center;
//     width: 100%;
//     max-width: 1564px;
//     max-height: 48px;
//   }
//   .header-card-wrapper p {
//     font-size: 24px;
//     color: var(--grey-text-color);
//     margin-right: 574px;
//   }
//   .img-thumb {
//     margin-top: 73px;
//     overflow: hidden;
//     margin-left: -2px;
//     margin-right: 152px;
//     border-bottom-left-radius: 40px;
//   }
//   .img-thumb img {
//     width: 100%;
//     max-width: 508px;
//   }

//   .text-content-card-wrapper {
//     width: 100%;
//     max-width: 904px;
//     display: flex;
//     flex-direction: column;
//     margin-top: 40px;
//   }
//   .text-content-card-wrapper ul:first-child {
//     width: 100%;
//     max-width: 904px;
//     display: flex;
//     flex-direction: row;
//     column-gap: 20px;
//     margin-bottom: 40px;

//     font-family: "400-Montserrat";
//     font-weight: 400;
//     font-size: 16px;
//     text-transform: uppercase;
//   }
//   .text-content-card-wrapper ul:first-child li {
//     height: 36px;
//     padding: 8px 12px;
//     display: flex;
//     align-items: center;
//     flex: 0 0 auto;
//     border-radius: 200px;
//     border: 2px solid var(--yellow);
//   }
//   .text-content-card-wrapper p {
//     width: 100%;
//     max-width: 904px;
//     margin-bottom: 40px;
//     padding-right: 132px;

//     font-family: "400-Montserrat";
//     font-size: 20px;
//     line-height: 1.5;
//   }
//   .text-content-card-wrapper h4 {
//     color: var(--grey-text-color);
//     font-size: 22px;
//     margin-bottom: 20px;
//     line-height: normal;
//   }
//   .text-content-card-wrapper ul:last-child {
//     font-size: 22px;
//     display: flex;
//     flex-direction: column;
//     row-gap: 12px;
//   }
//   .text-content-card-wrapper ul:last-child li svg {
//     margin-right: 20px;
//   }
// `;

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
