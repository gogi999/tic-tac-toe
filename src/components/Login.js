import React from 'react';
import './Login.css';

const Login = ({
    player1,
    player2,
    setPlayer1,
    setPlayer2,
    setIsLoggedIn
}) => {
    const handlePlayer1 = (e) => {
        setPlayer1(e.target.value);
    }

    const handlePlayer2 = (e) => {
        setPlayer2(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }

    return (
        <section className="login">
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <p>
                            <label>Name Player 1</label>
                            <input
                                type="text"
                                value={player1}
                                onChange={handlePlayer1}
                                required
                            />
                        </p>
                        <p>
                            <label>Name Player 2</label>
                            <input
                                type="text"
                                value={player2}
                                onChange={handlePlayer2}
                                required
                            />
                        </p>
                        <div className="btn-container">
                            <button
                                type="submit"
                                className="submit-btn"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section >
    );
}

export default Login;