import "./App.css";
import React from "react";
import TaskList from "./components/TasksList/TaskList";
import TextField from "./components/TextField/TextField";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [appTasks, setAppTasks] = React.useState([]);

  const addTask = (text) =>
    setAppTasks([
      ...appTasks,
      {
        id: uuidv4(),
        checked: false,
        text: text,
      },
    ]);

  handleDelete = id => {
    const filteredTaskes = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      appTasks: filteredTaskes
    })
  }

  const onTaskClicked = (identifier) => {
    setAppTasks(
      appTasks.map((task) => {
        if (task.id == identifier) {
          return { ...task, checked: !task.checked };
        }
        return task;
      })
    );
  };

  return (
    <div className="App">
      <TextField onOkClicked={addTask} />
      <TaskList onTaskClicked={onTaskClicked} tasks={appTasks} />
    </div>
  );
}

// DO NOT DO THIS (CREATING A CLASS + A FUNCTION COMPONENT) IN A REAL PROJECT

// class AppClassComponent extends React.Component {
//   state = {
//     appTasks: [],
//   };

//   setAppTasks(tasks) {
//     this.setState({ appTasks: tasks });
//   }

//   render() {
//     const addTask = (text) => {
//       this.setAppTasks(
//         this.state.appTasks.concat({ checked: false, text: text })
//       );
//     };
//     return (
//       <div className="App">
//         <h1>Class Component</h1>
//         <TextField onOkClicked={addTask} />
//         <TaskList tasks={this.state.appTasks} />
//       </div>
//     );
//   }
// }

export default App;
