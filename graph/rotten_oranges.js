var orangesRotting = function (grid) {
    let n = grid.length;
    let m = grid[0].length;

    let queue = [];
    let tm = -1;

    const bfs = (i, j) => {
        queue.push([i, j]);
        while (queue.length > 0) {
            let item = queue.shift();

            let row = item[0];
            let col = item[1];

            if (row >= 0 && row < n && col >= 0 && col < grid[row].length && grid[row][col] === 1) {
                grid[row][col] = 2;
                queue.push(row, col);
            }
        }

    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) {
                bfs(i, j);
                tm++;
            }
        }
    }

    console.log(grid);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }

    return tm;

};

let input = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]; // o/p:4
// let input = [[2, 1, 1], [0, 1, 1], [1, 0, 1]]; // o/p:-1
// let input = [[0, 2]];  // o/p:0
let ans = orangesRotting(input);
console.log(ans);



module.exports = orangesRotting;