import './App.css';
import React, {useState} from 'react';

const tileImages = [
  {"src": "/images/mercedes.png"},
  {"src": "/images/bmw.jpg"},
  {"src": "/images/audi.jpg"},
  {"src": "/images/porsche.jpg"},
  {"src": "/images/lamborghini.jpg"},
  {"src": "/images/maserati.png"},
]

function App() {
  const [tiles, setTiles] = useState([])
  const[turns] = useState(0)

  // shuffle card functionality
  const shuffleTiles = () => {
    // creates 12 tiles 
    const shuffleTiles = [...tileImages, ...tileImages]
      // end result will be a shuffled array
      .sort(() => Math.random() - 0.5)
      // each card will have an id property
      .map((tile) => ({...tile, id: Math.random() }))

      setTiles(shuffleTiles)

  }

  console.log(tiles, turns)


  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleTiles}>New Game</button>

      <div className="tile-grid">
        {tiles.map(tile => (
          <div className="tile" key={tile.id}>
            <div>
              <img className="front" src={tile.src} alt="tile front"/>
              <img className="back" src="/images/background.jpg" alt="tile back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
