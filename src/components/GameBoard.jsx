

const inicialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];



export default function GameBoard( { onSelectSquare, turns } ) {

    let gameBoard = inicialGameBoard;

    for ( const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    // const [gameBoard, setGameBoard] = useState(inicialGameBoard);

    // function handleSelectSquare (rowIndex, colIndex) {
    //     setGameBoard(
    //         (prevGameBoard) => {
    //             const updatedBoard = [...prevGameBoard.map( innerArray => [...innerArray] )];
    //             updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //             return updatedBoard;
    //         }
    //     );
    //         onSelectSquare();
    // }

  // <p>No passo 84, o autor do tutorial tirou a lógica do componente GAMEBOARD.</p>


  return (
    <>
    <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button 
                                onClick={ () => onSelectSquare(rowIndex, colIndex) }
                                disabled = {playerSymbol != null}
                            >
                                {playerSymbol}
                            </button>
                        </li>
                    )

                    )
                    }
                </ol>
            </li>
        )

        )
        }
    </ol>
    </>
);

}
