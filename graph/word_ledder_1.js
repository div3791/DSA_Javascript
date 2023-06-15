var ladderLength = function (beginWord, endWord, wordList) {
    if (wordList.length <= 0) return 0;
    let set = new Set(wordList);
    if (!set.has(endWord)) return 0;

    let queue = [];
    queue.push([beginWord, 1]);
    set.delete(beginWord);


    while (queue.length > 0) {
        let item = queue.shift();
        let word = item[0];
        let steps = item[1];

        if (word === endWord) return steps;

        for (let i = 0; i < word.length; i++) {
            for (let j = 97; j <= 122; j++) {
                let ch = String.fromCharCode(j);
                let wordCharArray = word.split("");
                if (ch === wordCharArray[i]) continue;
                wordCharArray[i] = ch;
                let newWord = wordCharArray.join("");
                if (set.has(newWord)) {
                    set.delete(newWord);
                    queue.push(newWord, steps + 1);
                }
            }
        }

        return 0;
    }
};

module.exports = ladderLength;

let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
let beginWord = "hit";
let endWord = "cog";

console.log(ladderLength(beginWord, endWord, wordList));