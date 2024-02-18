import icon from "../../../assets/icons.svg";

const DropdownArrow = () => {
  return (
    <div>
      <svg>
        <use href={icon + "#dropdown-arrow"}></use>
      </svg>
    </div>
  );
};

export default DropdownArrow;
