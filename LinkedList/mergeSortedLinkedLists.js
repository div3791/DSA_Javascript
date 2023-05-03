function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function merge(a, b) {

    let result = new ListNode(0);
    let current = result;

    while (a !== null && b !== null) {
        if (a.val < b.val) {
            current.next = a;
            a = a.next;
        } else {
            current.next = b;
            b = b.next;
        }

        current = current.next;

    }

    current.next = a || b;

    return result.next;
}

var mergeKLists = function (lists) {

    if (lists.length === 0) {
        return null;
    }

    while (lists.length > 1) {
        let a = lists.shift();
        let b = lists.shift();
        let merged = merge(a, b);
        lists.push(merged);
    }

    return lists[0];
};

let ip = [[1, 4, 5], [1, 3, 4], [2, 6]]

console.log(mergeKLists(ip))