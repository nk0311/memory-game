import './SingleTile.css'

export default function SingleTile({ tile, handleChoice }) {

    const handleClick = () => {
        handleChoice(tile)
    }


    return (
        <div className="tile">
            <div>
              <img className="front" src={tile.src} alt="tile front"/>
              <img className="back" 
              src="/images/background.jpg" 
              onClick={handleClick} alt="tile back" />
            </div>
        </div>
    )
}