import React from "react";
import Task from "../Task/Task";

const TaskList = ({ tasks, onTaskClicked }) => {
  return tasks.map(({ id, checked, text }) => {
    return (
      <Task
        key={id}
        identifier={id}
        isChecked={checked}
        text={text}
        onTaskClicked={onTaskClicked}
      />
    );
  });
};

export default TaskList;
