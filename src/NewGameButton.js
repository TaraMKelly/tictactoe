import React from 'react'

function NewGameButton({ initialSquares, setSquares }) {
    function handleNewGame() {
        setSquares(initialSquares)
    }

    return (
        <button onClick={handleNewGame}>New Game</button>
    )
}

export default NewGameButton