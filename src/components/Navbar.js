import React from 'react';
import './Navbar.css';

const Navbar = ({ count, player1, player2 }) => {
    return (
        <nav>
            <div className="logo">
                <h2>Tic Tac Toe</h2>
            </div>
            <ul>
                <li>{player1}: {count["1"]}</li>
                <li>{player2}: {count["-1"]}</li>
                <li>Ties: {count["T"]}</li>
            </ul>
        </nav>
    );
}

export default Navbar;