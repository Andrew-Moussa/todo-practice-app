import React from "react";
import ListElement from "./listelement";

const getRandomColor = () => {
  return "#" + Math.ceil(10000 * Math.random());
};

const App = () => {
  const [list, setList] = React.useState([]);
  const [currentText, setCurrentText] = React.useState("");

  const addElement = (text) => {
    setList([...list, text]);
  };

  const removeElement = (index) => {
    const newList = [...list.slice(0, index), ...list.slice(index + 1)];
    setList(newList);
  };

  const copyElement = (index) => {
    setList([...list, list[index]]);
  };

  return (
    <div>
      <input
        type="text"
        value={currentText}
        onChange={(event) => setCurrentText(event.target.value)}
      />
      <button
        onClick={() => {
          addElement(currentText);
          setCurrentText("");
        }}
      >
        Ok
      </button>
      <ul>
        {list.map((element, index) => (
          <ListElement
            key={index}
            onClick={() => {
              removeElement(index);
            }}
            bgColor={getRandomColor()}
          >
            {element}
          </ListElement>
        ))}
      </ul>
    </div>
  );
};

export default App;
