import React from 'react';
import './Endgame.css';

const Endgame = ({ winner, player1, player2, playAgain }) => {
    return (
        <section className="endgame">
            <div className="endgame-container">
                <h2>{winner === 1 ? `You win ${player1}!!!` : ""}</h2>
                <h2>{winner === -1 ? `You win ${player2}!!!` : ""}</h2>
                <h2>{winner === "T" ? "It's tie game!" : ""}</h2>
                < button onClick={playAgain} >
                    Wanna try again ?
                </button >
            </div>
        </section>
    );
}

export default Endgame;
