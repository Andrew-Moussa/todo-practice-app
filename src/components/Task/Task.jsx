import React from "react";

const Task = ({ identifier, isChecked = false, text, onTaskClicked, handleDelete }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onTaskClicked(identifier)}
        // handleDelete={() => handleDelete(task.identifier)}
      />
      <span>{text}</span>
    </>
  );
};

export default Task;
