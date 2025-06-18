// Exercise3.js
import React from 'react';

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

function Exercise() {
  return (
    <div>
      <h1 style={style_header}>Styled Header</h1>
      <p>This is a paragraph.</p>
      <a href="https://www.google.com" target="_blank" rel="noreferrer">This is a link</a>
      <form>
        <input type="text" placeholder="Enter something" />
        <button type="submit">Submit</button>
      </form>
      <img src="https://via.placeholder.com/150" alt="Placeholder" />
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    </div>
  );
}

export default Exercise;
