function jumpGame(N) {
    let len = N.length - 1, curr = -1, next = 0, ans = 0
    for (let i = 0; next < len; i++) {
        if (i > curr) ans++, curr = next
        next = Math.max(next, N[i] + i)
    }
    return ans
}

let arr = [2, 3, 1, 1, 4]
console.log(jumpGame(arr));