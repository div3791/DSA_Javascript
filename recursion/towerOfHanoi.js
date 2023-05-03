
function getTower(num, source, helper, dest) {
    let counter = 0;
    function towerOfHanoi(num, source, helper, dest) {
        if (num === 1) {
            counter += 1
            return;
        }
        towerOfHanoi(num - 1, source, dest, helper);
        counter += 1
        towerOfHanoi(num - 1, helper, dest, source);
    }
    towerOfHanoi(num, source, helper, dest);
    return counter;
}



let n = 35;

console.log(getTower(n, "A", "B", "C"));