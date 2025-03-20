import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"



function App() {

  const [activePlayer, SetActivePlayer] = useState('X');

  function handleSelectSquare () {
    SetActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }


  return (
      <main>
        <div id="game-container">
          <ol id="players"  className="highlight-player">
            <Player inicialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
            <Player inicialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
          </ol>
          <div id="game-board">
            <GameBoard  onSelectSquare={handleSelectSquare}   activePlayerSymbol={activePlayer}/>
          </div>

           
        </div>
     
        LOG
  

      </main>
  )
}

export default App
