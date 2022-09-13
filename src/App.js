import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor());
  const newColor = randomColor();
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 40,
        }}
      >
        Random Color Generator
      </h1>
      <div
        style={{
          width: 350,
          height: 350,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          border: '1px black solid',
          borderRadius: 15,
          backgroundColor: color,
        }}
      >
        Generated: {color}
      </div>

      <br />
      <br />
      <button
        onClick={() => {
          setColor(newColor);
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
