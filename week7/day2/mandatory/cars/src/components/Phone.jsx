import React, { useState } from "react";

function Phone() {
  const state = useState("Samsung");
  const brand = state[0];

  const modelState = useState("Galaxy S20");
  const model = modelState[0];

  const yearState = useState(2020);
  const year = yearState[0];

  const colorState = useState("black");
  const color = colorState[0];
  const setColor = colorState[1];

  function changeColor() {
    setColor("blue");
  }

  return (
    <div>
      <h1>Brand: {brand}</h1>
      <h2>Model: {model}</h2>
      <h3>Color: {color}</h3>
      <h4>Year: {year}</h4>
      <button onClick={changeColor}>Change color to blue</button>
    </div>
  );
}

export default Phone;

