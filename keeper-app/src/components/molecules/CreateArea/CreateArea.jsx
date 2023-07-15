/* eslint-disable no-unused-vars */
import React from "react";
import Textarea from "../../atoms/Textarea/Textarea";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import "./CreateArea.scss";

const CreateArea = () => {
  return (
    <>
      <form>
        <Input name="title" placeholder="Title" />
        <Textarea name="content" placeholder="Take a note..." />
        <Button text='Add'/>
      </form>
    </>
  );
};

export default CreateArea;
