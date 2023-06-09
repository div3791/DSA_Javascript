function countDistinctIslands(grid) {
    let set = []

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                let list = [];
                dfs(i, j, grid, list, i, j);
                set.push(list);
            }
        }
    }
    return new Set(set.map(item => item.toString())).size;
}

function dfs(i, j, grid, list, nrow, ncol) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0 || grid[i][j] === -1) {
        return;
    }

    grid[i][j] = -1;
    list.push([i - nrow, j - ncol]);

    dfs(i + 1, j, grid, list, nrow, ncol);
    dfs(i - 1, j, grid, list, nrow, ncol);
    dfs(i, j + 1, grid, list, nrow, ncol);
    dfs(i, j - 1, grid, list, nrow, ncol);
}

module.exports = countDistinctIslands;

