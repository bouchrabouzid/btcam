import React, { useState, useEffect } from "react";

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]);

  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <h2>{favoriteColor}</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Color;
