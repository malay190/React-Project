import React from "react";
import { MdMessage } from "react-icons/md";
import "./Buttons.css";
const Buttons = (props) => {
  return (
    <button className={`${props.isOutline ? "outline-btn" : "primary-btn"}`}>
      {props.icon}
      {props.text}
    </button>
  );
};

export default Buttons;
