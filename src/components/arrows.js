import React from "react";
import { useDispatch } from "react-redux";
import { updateKeyboardAction } from "../config/actions";
import arrowup from "../image/arrowup.svg";
const Arrows = (props) => {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    dispatch(updateKeyboardAction(event));
  };
  const Button = (event) => {
    return (
      <div className="arrow-button" onClick={() => handleClick(event)}>
        <img src={arrowup} className={event} />
      </div>
    );
  };
  return (
    <div className="arrow-div">
      <div className="arrow-div-container">
        <span> {Button("up")} </span>
      </div>
      <div className="arrow-div-container">
        <span> {Button("left")} </span>
        <span> {Button("right")} </span>
      </div>
      <div className="arrow-div-container">
        <span> {Button("down")} </span>
      </div>
    </div>
  );
};

export default Arrows;
