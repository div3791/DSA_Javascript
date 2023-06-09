var solve = function (board) {

    let n = board.length;
    let m = board[0].length;

    for (let i = 0; i < n; i++) {
        if (board[i][0] != 'X') {
            dfs(i, 0, board);
        }

        if (board[i][m - 1] != 'X') {
            dfs(i, m - 1, board);
        }
    }

    for (let i = 0; i < m; i++) {
        if (board[0][i] != 'X') {
            dfs(0, i, board);
        }

        if (board[n - 1][i] != 'X') {
            dfs(n - 1, i, board);
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';

            }
            if (board[i][j] === 'D') {
                board[i][j] = 'O';
            }
        }
    }

    return board;
};

const dfs = (i, j, board) => {

    if (i < 0 || i >= board.length || j < 0 || j > board[0].length || board[i][j] !== 'O') {
        return;
    }

    board[i][j] = 'D';

    dfs(i + 1, j, board);
    dfs(i - 1, j, board);
    dfs(i, j + 1, board);
    dfs(i, j - 1, board);
}

module.exports = solve;