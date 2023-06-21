var findSubStrings = (str) => {

    let maxSubStr = -1;
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let subString = str.slice(i, j + 1);
            if (subString.length > 0 && subString !== str) {
                let arr = subString.split("");
                let localEvens = 0;
                for (let k = 0; k < arr.length; k++) {
                    if (+arr[k] % 2 === 0) localEvens++;
                }
                if (localEvens > 0) {
                    obj[subString] = localEvens;
                }
            }
        }
    }
    console.log(obj)
    let ans = Object.keys(obj);
    return ans[ans.length - 1].toString();
}

var findMaxEvenSubString = (str) => {
    let arr = str.split("");
    let ss = [];
    for (let i = 0; i < arr.length; i++) {
        if (+arr[i] % 2 == 0) {
            ss.push(arr[i]);
        }
    }
    console.log(ss);
}

console.log(findMaxEvenSubString('144'))