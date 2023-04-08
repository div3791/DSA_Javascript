let arr = [5, 8, 4, 3, 1];

/* Custom map function */
Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

// console.log(arr.myMap((i) => {
//     return i + 1;
// }));

/* Done */

/* Custom filter function */
Array.prototype.myFilter = function (cb) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) temp.push(this[i]);
    }

    return temp;
}

// console.log(arr.myFilter((i) => i > 2))
/* Done */

/* Custom reduce funciton */
Array.prototype.myReduce = function (cb, init) {

    let result = init

    for (let i = 0; i < this.length; i++) {
        result = result ? cb(result, this[i], i, this) : this[i];
    }

    return result;

}


/* Custom call method */
let car1 = {
    color: 'red',
    company: 'Ferrari'
}

function purchase(currency, price) {
    console.log(`I have purchased ${this.color} ${this.company} car for ${currency}${price}`);
}

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== 'function') throw new Error(`${this} is not callable`);
    context.fn = this;
    context.fn(...args);
};

// purchase.myCall(car1, '$', 5000);

/* Done */

/* Custom apply method */

Function.prototype.myApply = function (context = {}, args) {
    if (typeof this !== 'function') throw new Error(`${this} is not callable`);
    if (!Array.isArray(args)) throw new Error(`Argument must be an array`);

    context.fn = this;
    context.fn(...args);
}

// purchase.myApply(car1, ['$', 4000])

/* Done */

/* Custom bind method */

Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== 'function') throw new Error(`Could not bind as this is not callable`);
    context.fn = this;

    return function (...newArgs) {
        return context.fn(...args, ...newArgs);
    }
}

const fn = purchase.myBind(car1);
fn('$', 2000)

