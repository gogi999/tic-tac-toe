const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

export const checkWinner = (board) => {
    for (let i = 0; i < winningCombos.length; i++) {
        if (Math.abs(
            board[winningCombos[i][0]] +
            board[winningCombos[i][1]] +
            board[winningCombos[i][2]]) === 3) {
            return board[winningCombos[i][0]];
        }
    }
    if (board.includes(null)) return null;
    return 'T';
}
