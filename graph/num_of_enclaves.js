var numEnclaves = function (grid) {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i][0] != 0) {
            dfs(i, 0, grid);
        }
        if (grid[i][grid[0].length - 1] != 0) {
            dfs(i, grid[0].length - 1, grid);
        }
    }
    for (let i = 0; i < grid[0].length; i++) {
        if (grid[0][i] != 0) {
            dfs(0, i, grid);
        }
        if (grid[grid.length - 1][i] != 0) {
            dfs(grid.length - 1, i, grid);
        }
    }
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                count++;
            }
        }
    }

    return count;
};

const dfs = (i, j, grid) => {
    if (!(i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] == 1)) {
        return;
    }
    grid[i][j] = -1;

    dfs(i + 1, j, grid);
    dfs(i - 1, j, grid);
    dfs(i, j + 1, grid);
    dfs(i, j - 1, grid);
}

module.exports = numEnclaves;