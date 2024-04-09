import React from "react";
import "./TabBbutton.scss";
import propTypes from "prop-types";
const TabButton = (props) => {
  const { children, onClick, isSelected } = props;
  return (
    <li>
      <button
        className={`TabButton ${isSelected ? "active" : ""}`}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
};
TabButton.propTypes = {
  children: propTypes.node, //children = <div>component</div>  => react node
  onClick: propTypes.func,
  isSelected: propTypes.bool,
};
export default TabButton;
