function removeDuplicate(str, index, result, map) {

    if (index === str.length) {
        for (let [key, value] of map.entries()) {
            result += value
        }
        return result;
    }

    if (!map.has(str[index])) {
        map.set(str[index], str[index]);
    }

    return removeDuplicate(str, index + 1, result, map);

}

let str = "abbccdtsdb";

console.log(removeDuplicate(str, 0, "", new Map()))