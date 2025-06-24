// src/Components/Car.js
import React, { useState } from "react";
import Garage from "./Garage";

function Car({ carInfo }) {
  const [color] = useState("red");

  return (
    <div>
      <h2>This car is a {color} {carInfo.model}</h2>
      <div style={{border: "2px solid red"}}>
      <Garage size="small" />
      </div>
    </div>
  );
}

export default Car;
