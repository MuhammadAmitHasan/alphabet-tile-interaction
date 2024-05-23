import { useState } from 'react';
import './App.css';

function App() {
  const [outputString, setOutputString] = useState('');

  const handleClick = (letter: string) => {
    setOutputString((prevString) => {
      // Append clicked letter to outputString
      const newString = prevString + letter;

      // Check for consecutive letters
      let consecutiveCount = 1;
      let finalString = '';
      for (let i = 0; i < newString.length; i++) {
        if (newString[i] === newString[i + 1]) {
          consecutiveCount++;
        } else {
          if (consecutiveCount >= 3) {
            finalString += '_';
          } else {
            finalString += newString.slice(i - consecutiveCount + 1, i + 1);
          }
          consecutiveCount = 1;
        }
      }
      return finalString;
    });
  };

  const renderTiles = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.split('').map((letter) => (
      <div className="tile" key={letter} onClick={() => handleClick(letter)}>
        {letter}
      </div>
    ));
  };

  return (
    <>
      <h1>Alphabet Tile Interaction</h1>
      <div className="app">
        <div className="tiles-container">{renderTiles()}</div>
        <div className="output" id="outputString">
          {outputString.length > 0 ? `Output: ${outputString}` : ''}
        </div>
      </div>
    </>
  );
}

export default App;
