import React from "react";
import "./TabBbutton.scss";
import propTypes from "prop-types";
const TabButton = (props) => {
  const { children, onClick, isSelected } = props;
  return (
    <li className={`TabButton ${isSelected ? "active" : ""}`}>
      <button onClick={onClick}>{children}</button>
    </li>
  );
};
TabButton.propTypes = {
  children: propTypes.node, //children = <div>component</div>  => react node
  onClick: propTypes.func,
  isSelected: propTypes.bool,
};
export default TabButton;
