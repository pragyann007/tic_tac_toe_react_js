import './TicTacToe.css';
import { useState } from 'react';

const TicTacToe = () => {
    const [xTurn, setXTurn] = useState(true);
    const [winner, setWinner] = useState(null);
    const [board, setBoard] = useState(Array(9).fill(null));

    const showButton = (index) => {
        return (
            <button
                onClick={() => handleClick(index)}
                className="btn"
                disabled={board[index] || winner} // Disable button if filled or winner exists
            >
                {board[index]}
            </button>
        );
    };

    const handleClick = (index) => {
        if (board[index] || winner) return; // Prevent overwriting or playing after a win

        const newBoard = [...board];
        newBoard[index] = xTurn ? 'X' : 'O';
        setBoard(newBoard);
        setXTurn(!xTurn);

        const winnerCombination = checkWinner(newBoard);
        if (winnerCombination) {
            setWinner(newBoard[winnerCombination[0]]);
        }
    };

    const checkWinner = (newBoard) => {
        const combinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < combinations.length; i++) {
            const [a, b, c] = combinations[i];
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
                return combinations[i];
            }
        }
        return null;
    };

    return (
        <>
            <div className="page">
                <div className="row">
                    {showButton(0)}
                    {showButton(1)}
                    {showButton(2)}
                </div>
                <div className="row">
                    {showButton(3)}
                    {showButton(4)}
                    {showButton(5)}
                </div>
                <div className="row">
                    {showButton(6)}
                    {showButton(7)}
                    {showButton(8)}
                </div>
                {winner && <h1>Winner is {winner}</h1>}
            </div>
          
        </>
    );
};

export default TicTacToe;
