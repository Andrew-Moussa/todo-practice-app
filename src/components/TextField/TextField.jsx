import React from "react";

import Button from "../Button/Button";

const TextField = ({}) => {
  const [value, setValue] = React.useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <Button text="Ok" onClick={} />
      <Button text="Cancel" onClick={() => setValue("")} />
    </>
  );
};

export const TextField;
