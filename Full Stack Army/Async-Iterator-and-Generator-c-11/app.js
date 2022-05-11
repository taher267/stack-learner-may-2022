// const arr = [1, 2, 3, 4];
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

/**
 * nessecity of iterator
 */
// let index = 0;
// function next() {
//     return arr[index++]
// }
// console.log(next());
// console.log('text');
// console.log('text');
// console.log(next());

/**
 * Iterator
 * 
 */
const range = {
    start: 0,
    stop: 20,
    step: 5
}

range[Symbol.iterator] = function () {
    let current = this.start;
    const stop = this.stop;
    const step = this.step;
    return {
        next() {
            const o = {
                value: current,
                done: current > stop
            }
            current += step
            return o
        }
    }
}
const iterRanger = range[Symbol.iterator]();


for (let v of range) {
    console.log(v);
}
