import React, { useState } from "react";

export default function Increment_decrement() {
  const [number, setNumber] = useState(1);

  const handledecrement = () => {
    console.log("clicked");
    setNumber(number - 1);
  };

  const handleincrement = () => {
    console.log("clicked");
    setNumber(number + 1);
    console.log(number);
  };
  const handlereset=()=>{
    setNumber(0)
  }
  return (
    <div>
      <h3>React Web</h3>
      <h1>{number}</h1>
      <button onClick={handleincrement}>Increment</button>
      <br /><br />
      <button onClick={handledecrement}>Decrement</button>
<br />
      <br />
      <button onClick={handlereset}>Reset</button>
    </div>
  );
}
