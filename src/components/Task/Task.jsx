import React from "react";

const Task = ({ isChecked = false, text }) => {
  return (
    <>
      <input type="checkbox" checked={isChecked} />
      <span>{text}</span>
    </>
  );
};

export default Task;
