import React, { useState } from "react";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  // Function to handle voting
  function voteForLanguage(index) {
    // Make a copy of the array
    const newLanguages = [...languages];

    // Increase vote count of the selected language
    newLanguages[index].votes = newLanguages[index].votes + 1;

    // Update state
    setLanguages(newLanguages);
  }

  return (
    <div>
      <h1>React Voting App</h1>

      {languages.map(function (language, index) {
        return (
          <div key={index} style={{ marginBottom: "10px" }}>
            <span>{language.name} — Votes: {language.votes}</span>
            <button onClick={function () { voteForLanguage(index); }} style={{ marginLeft: "10px" }}>
              Vote
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;

