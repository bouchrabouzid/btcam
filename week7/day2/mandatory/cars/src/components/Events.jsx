import React, { useState } from "react";

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  function clickMe() {
    alert("I was clicked");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      alert(`You pressed Enter. Input: ${event.target.value}`);
    }
  }

  function toggleButton() {
    setIsToggleOn(function (prev) {
      return !prev;
    });
  }

  return (
    <div>
      <h3>Click Event</h3>
      <button onClick={clickMe}>Click Me</button>

      <h3>KeyDown Event</h3>
      <input type="text" placeholder="Press Enter" onKeyDown={handleKeyDown} />

      <h3>Toggle Button</h3>
      <button onClick={toggleButton}>
        {isToggleOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Events;

