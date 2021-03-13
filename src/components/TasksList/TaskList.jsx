import React from "react";

const TaskList = ({ tasks }) => {
  return tasks.map(({ checked, text }) => (
    <Task isChecked={checked} text={text} />
  ));
};

export default TaskList;
