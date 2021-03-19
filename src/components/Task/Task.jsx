import React from "react";

const Task = ({ identifier, isChecked = false, text, onTaskClicked }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onTaskClicked(identifier)}
      />
      <span>{text}</span>
    </>
  );
};

export default Task;
