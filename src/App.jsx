import Player from "./components/Player"

import GameBoard from "./components/GameBoard"



function App() {


  
// App
  return (
      <main>
        <div id="game-container">
          <ol id="players">
            <Player inicialName="Player 1" symbol="X" />
            <Player inicialName="Player 2" symbol="O" />
          </ol>
          <div id="game-board">
            <GameBoard />
          </div>

           
        </div>
     
        LOG
  

      </main>
  )
}

export default App
