function floodFill(image, sr, sc, color) {
    let initialColor = image[sr][sc];
    let n = image.length;
    let m = image[0].length;

    const dfs = (i, j) => {
        if (i < 0 || i >= n || j < 0 || j >= image[i].length || image[i][j] === color || image[i][j] !== initialColor) {
            return;
        }

        image[i][j] = color;

        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);

    }

    dfs(sr, sc);

    return image;
}

module.exports = floodFill;