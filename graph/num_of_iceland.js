var numIslands = function (grid) {
    let n = grid.length;
    let counter = 0;

    const dfs = (i, j) => {
        if (i < 0 || i >= n || j < 0 || j >= grid[i]?.length || grid[i][j] === "0") {
            return;
        }

        grid[i][j] = "0";

        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);

    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                counter++;
                dfs(i, j);
            }
        }
    }

    return counter;
};

module.exports = numIslands;