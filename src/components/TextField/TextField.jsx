import React from "react";

import Button from "../Button/Button";

const TextField = ({ onOkClicked }) => {
  const [value, setValue] = React.useState("");
  const resetText = () => setValue("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <Button
        text="Ok"
        onClick={() => {
          onOkClicked(value);
          resetText();
        }}
      />
      <Button text="Cancel" onClick={resetText} />
    </>
  );
};

export default TextField;
