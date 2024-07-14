function isEven(element) {
    if(element % 2 === 0){
        return true;
    }
    return false;
}
console.log(isEven(159));

//or

var isEven = (element) =>{
    return element % 2 === 0;
}
console.log(isEven(5));


// var result = [2, 4, 8, 6].every(isEven);
// console.log(result);

var result = [2, 4, 8, 6].every((e) => {
    return e % 2 === 0;
});
console.log(result);

//also

var result = [2, 4, 8, 6].every((e) => (e % 2 === 0));
console.log(result);