var myMap = new Map();

myMap.set(1, "ek");
myMap.set(2, "don");
myMap.set(3, "teen");
myMap.set(4, "chaar");

console.log(myMap);

for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}
for(let value of myMap.values()){
    console.log(`Value is ${value}`);
}
for(let [key, value] of myMap){
    console.log(`Key is ${key} and Value is ${value}`);
};

myMap.forEach ((value) => console.log(`${value}`));

myMap.delete(2);
console.log(myMap);