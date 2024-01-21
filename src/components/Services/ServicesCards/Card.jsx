import styled from "styled-components";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import icons from "../../../assets/icons.svg";
import BtnOrder from "../../Buttons/BtnOrder/BtnOrder";

function Card({ handleClickCard, card, id, dataName, className }) {
  const nameCard = { [card.name_card]: true };
  console.log("nameCard: ", nameCard);

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
          <h3>{card.title_card}</h3>
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
            {card.main_results.map((result) => {
              return <li key={nanoid()}>{result}</li>;
            })}
          </ul>
          <p>{card.description}</p>
          <div>
            <div className="advantages-wrapper">
              <h4>{card.title_list_advantages}</h4>
              <ul>
                {card.advantages_list_items.map((item) => {
                  return (
                    <li key={nanoid()}>
                      <svg width="11.2px" height="11.76px">
                        <use href={icons + "#marker_list"}></use>
                      </svg>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="first-decoration-block">
              <div></div>
            </div>
            <div className="second-decoration-block">
              <div></div>
              <div className="button-wrapper">
                <BtnOrder />
              </div>
            </div>
          </div>
        </div>
      </StyledCard>
    </>
  );
}

export default Card;

const StyledCard = styled.div`
  position: absolute;
  left: 0;
  top: ${(props) =>
    props.$name.landing ? "0" : props.$name.corporate ? "124px" : "248px"};
  width: 100%;
  max-width: 1564px;
  height: 602px;
  padding-top: 40px;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: ${(props) =>
    props.$name.landing ? "1" : props.$name.corporate ? "2" : "3"};
  background-color: #fff;
  color: #1c0f0f;

  transition: transform cubic-bezier(0.61, -0.55, 0.49, 1.52) 450ms,
    background-color cubic-bezier(0.61, -0.55, 0.49, 1.52) 450ms,
    color cubic-bezier(0.61, -0.55, 0.49, 1.52) 450ms;
  box-shadow: 0px 0px 80px 0px rgba(204, 204, 204, 0.4);

  h3 {
    color: #1c0f0f;
    font-family: "Montserrat";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: auto;
  }

  &.change-position-1-to-3 {
    z-index: 3;
    transform: ${(props) =>
      props.$name.landing
        ? "translateY(248px)"
        : props.$name.corporate
        ? "translateY(124px)"
        : "translateY(0px)"};
  }

  &.change-position-3-to-1 {
    z-index: 1;
    transform: ${(props) =>
      props.$name.landing
        ? "translateY(0px)"
        : props.$name.corporate
        ? "translateY(-124px)"
        : "translateY(-248px)"};
  }

  &.change-position-2-to-3 {
    z-index: 3;
    transform: ${(props) =>
      props.$name.landing
        ? "translateY(248px)"
        : props.$name.corporate
        ? "translateY(124px)"
        : "translateY(0px)"};
  }

  &.change-position-3-to-2 {
    z-index: 2;
    transform: ${(props) =>
      props.$name.landing
        ? "translateY(124px)"
        : props.$name.corporate
        ? "translateY(0px)"
        : "translateY(-124px)"};
  }

  &.active {
    background-color: #1c0f0f;
    color: #fff;
    box-shadow: none;
  }
  &.active h3 {
    color: #fff;
  }
  .header-card-wrapper {
    padding: 0 40px;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1564px;
    max-height: 48px;
  }
  .header-card-wrapper p {
    font-size: 24px;
    color: #aeaeae;
    margin-right: 574px;
  }
  .img-thumb {
    margin-top: 72px;
    overflow: hidden;
    margin-left: -1px;
    margin-right: 152px;
    border-bottom-left-radius: 40px;
  }
  .img-thumb img {
    width: 100%;
    max-width: 508px;
  }
  .text-content-card-wrapper {
    width: 100%;
    max-width: 904px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-top: 40px;
  }
  .text-content-card-wrapper > ul {
    display: flex;
    flex-direction: row;
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    gap: 20px;

    width: 100%;
    max-width: 904px;
  }
  .text-content-card-wrapper > ul li {
    height: 36px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    border-radius: 200px;
    border: 2px solid #e7f63c;
  }
  .text-content-card-wrapper p {
    width: 100%;
    max-width: 904px;
    padding-right: 132px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .text-content-card-wrapper > div {
    /* outline: 1px solid red; */
    display: flex;
    flex-direction: row;
  }
  .advantages-wrapper h4 {
    color: #aeaeae;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .advantages-wrapper > ul {
    font-size: 22px;
    font-weight: 500;
    padding-bottom: 57px;
  }
  .advantages-wrapper > ul > li svg {
    margin-right: 20px;
  }
  .first-decoration-block {
    width: 100%;
    max-width: 294px;
    background-color: #fff;
    border-color: transparent;
  }
  &.active .first-decoration-block > div {
    width: 100%;
    width: 296px;
    height: 208px;
    background-color: #1c0f0f;
    border-right-color: #1c0f0f;
    border-bottom-right-radius: 60px;
    margin-left: -1px;
    transition: background-color cubic-bezier(0.61, -0.55, 0.49, 1.52) 450ms;
  }
  .second-decoration-block {
    background-color: #fff;
    transition: background-color cubic-bezier(0.61, -0.55, 0.49, 1.52) 450ms;
  }
  &.active .second-decoration-block {
    width: 100%;
    max-width: 317px;
    border-left-color: #1c0f0f;
    background-color: #1c0f0f;
    transition: background-color cubic-bezier(0.61, -0.55, 0.49, 1.52) 450ms;
  }

  .second-decoration-block div:first-child {
    /* width: 100%; */
    width: 325px;
    height: 112px;
    background-color: #fff;

    position: relative;
  }

  &.active .second-decoration-block div:first-child::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 325px;
    height: 112px;
    background-color: #1c0f0f;
    border-bottom-right-radius: 60px;
    transition: background-color cubic-bezier(0.61, -0.55, 0.49, 1.52) 450ms;
  }

  .button-wrapper {
    /* width: 100%; */
    width: 328px;
    background-color: #fff;
    padding: 16px 0 0 16px;
    border-top-left-radius: 55px;
  }
`;

Card.propTypes = {
  handleClickCard: PropTypes.func,
  card: PropTypes.shape({
    name_card: PropTypes.string,
    title_card: PropTypes.string,
    img: PropTypes.string,
    img_alt: PropTypes.string,
    description: PropTypes.string,
    main_results: PropTypes.arrayOf(PropTypes.string),
    title_list_advantages: PropTypes.string,
    advantages_list_items: PropTypes.arrayOf(PropTypes.string),
  }),
  id: PropTypes.number,
  dataName: PropTypes.string,
  className: PropTypes.string,
};
