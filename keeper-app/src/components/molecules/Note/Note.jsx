/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Note.scss";
import Button from "../../atoms/Button/Button";

const Note = (props) => {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Button text="Delete" />
    </div>
  );
};

export default Note;
