import Player from "./components/Player"





function App() {


  
// App
  return (
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="Player 1" symbol="X" />
            <Player name="Player 2" symbol="O" />
          </ol>
          <div id="game-board">

          </div>
           GAME BOARD

        </div>
     
        LOG
  

      </main>
  )
}

export default App
