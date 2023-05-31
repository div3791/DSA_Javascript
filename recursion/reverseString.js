function reverseString(str, index, result) {
    if (index === 0) {
        result += str[index]
        return result;
    }
    result += str[index]
    return reverseString(str, index - 1, result);
}

let string = "Divyesh";
console.log(reverseString(string, string.length - 1, ""))