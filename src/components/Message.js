import React from 'react';
import './Message.css';

const Message = ({ games }) => {
    return (
        <div className="message">
            {games.map((game, i) => (
                <h3 key={i}>
                    {game.time + " "} {" | " + game.name1 + " "} vs
                    {" " + game.name2 + " "} {" | " + game.result}
                </h3>
            ))}
        </div>
    );
}

export default Message;
