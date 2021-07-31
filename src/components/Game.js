import React, { useState } from 'react';
import Board from './Board';
import Login from './Login';
import Navbar from './Navbar';

const Game = () => {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [count, setCount] = useState({
        '1': 0,
        '-1': 0,
        T: 0
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return isLoggedIn ? (
        <>
            <Navbar
                player1={player1}
                player2={player2}
                count={count}

            />
            <Board
                player1={player1}
                player2={player2}
                count={count}
                setCount={setCount}
            />
        </>
    ) : (
            <Login
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setPlayer1={setPlayer1}
                setPlayer2={setPlayer2}
            />
        )
}

export default Game;
