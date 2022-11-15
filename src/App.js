import './App.css';
import React, {useEffect, useState} from 'react';
import SingleTile from './components/SingleTile';

const tileImages = [
  {"src": "/images/mercedes.png", matched: false},
  {"src": "/images/bmw.jpg", matched: false},
  {"src": "/images/audi.jpg", matched: false},
  {"src": "/images/porsche.jpg", matched: false},
  {"src": "/images/lamborghini.jpg", matched: false},
  {"src": "/images/maserati.png", matched: false},
]

function App() {
  const [tiles, setTiles] = useState([])
  //const[Tries, setTries] = useState(0)
  const[choiceOne, setChoiceOne] = useState(null);
  const[choiceTwo, setChoiceTwo] = useState(null);
  const[disabled, setDisabled] = useState(false);

  // shuffle card functionality
  const shuffleTiles = () => {
    // creates 12 tiles 
    const shuffleTiles = [...tileImages, ...tileImages]
      // end result will be a shuffled array
      .sort(() => Math.random() - 0.5)
      // each card will have an id property
      .map((tile) => ({...tile, id: Math.random() }))

      setTiles(shuffleTiles)
      //setTries(0)

  }

  // handling choices
  const handleChoice =  (tile) => {
    choiceOne ?  setChoiceTwo(tile) : setChoiceOne(tile)
  }

  // comparing the 2 clicked tiles
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setTiles(prevTiles => {
          return prevTiles.map(tile => {
            if (tile.src === choiceOne.src) {
              return {...tile, matched: true}
            } else {
              return tile
            }
          })
        })
       
        resetTries()
      } else {
        setTimeout(() => resetTries(), 1500)
      }
    }
  }, [choiceOne, choiceTwo])
 
  //resetting and incrementing the tries
  const resetTries = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    // setTries(prevTries => prevTries + 1)
    setDisabled(false)
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleTiles}>New Game</button>

      <div className="tile-grid">
        {tiles.map(tile => (
          <SingleTile 
          key={tile.id} 
          tile={tile} 
          handleChoice={handleChoice}
          flipped={tile === choiceOne || tile === choiceTwo || tile.matched}
          disabled={disabled}
          /> 
        ))}
      </div>
    </div>
  );
}

export default App;
