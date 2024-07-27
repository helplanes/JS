// var returnedValue = Math.max(2, 5, 6, 7, 8, 9);
// console.log(returnedValue);

// var myObject = {}

// Object.assign(myObject, {a: 1, b: 2});
// console.log(myObject);

function sunOne(a, b){
    return a + b;
}

var myA = [5, 9];
// console.log(sunOne(...myA)); //spreadOP

function sumTwo(...args){
    let sum = 0;
    for (const arg of args){
        sum = sum + arg;
    }
    return sum;
};
console.log(sumTwo(2, 5, 6, 4, 23, 5654));