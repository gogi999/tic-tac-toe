import React, { useState, useEffect } from 'react';
import { checkWinner } from '../helpers';
import Endgame from './Endgame';
import Message from './Message';

const Board = ({ player1, player2, count, setCount }) => {
    const [turn, setTurn] = useState(1);
    const [winner, setWinner] = useState(null);
    const [board, setBoard] = useState(Array(9).fill(null));
    const [history, setHistory] = useState([]);

    const day = new Date();
    const gameTime = `${day.getDate()}.${day.getMonth()}. ${day.getHours()}:${day.getMinutes()}`;
    const gameDraw = {
        time: gameTime,
        name1: player1,
        name2: player2,
        result: 'Draw!'
    }
    const gameWin = {
        time: gameTime,
        name1: player1,
        name2: player2,
        result: winner === 1 ? `${player1} Won!` : `${player2} Won!`
    }

    useEffect(() => {
        localStorage.setItem('history', JSON.stringify(history));
    }, [history]);

    const playAgain = () => {
        if (winner === 1 || winner === -1) {
            setHistory([...history, gameWin]);
        } else {
            setHistory([...history, gameDraw]);
        }
        setBoard(Array(9).fill(null));
        setWinner(null);
        setTurn(1);
    }

    const handleClick = (e) => {
        if (board[e.target.id]) return;
        if (winner) return;

        let newBoard = [...board];
        newBoard[e.target.id] = turn;
        setCount({
            ...count,
            [checkWinner(newBoard)]: count[checkWinner(newBoard)] + 1
        });
        setWinner(checkWinner(newBoard));
        setTurn(turn * -1);
        setBoard(newBoard);
    }

    return (
        <div>
            <br />
            <div>
                <h1>
                    {turn > 0 ? `It's ${player1}'s turn` : `It's ${player2}'s turn`}
                </h1>
            </div>
            <br />
            <div className="board">
                {board.map((box, i) => (
                    <div
                        className="boardBox"
                        key={i}
                        id={i}
                        onClick={handleClick}
                    >
                        {box === 1 ? "X" : ""}
                        {box === -1 ? "O" : ""}
                    </div>
                ))}
            </div>

            {winner ? (
                <>
                    <Endgame
                        winner={winner}
                        player1={player1}
                        player2={player2}
                        playAgain={playAgain}
                    />
                </>
            ) : ''}
            <Message history={history} />
        </div>
    );
}

export default Board;
