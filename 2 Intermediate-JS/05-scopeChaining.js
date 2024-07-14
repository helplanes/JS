var name = "Krish";
console.log("Line no 3 " + name);


function sayName() {
    var name = "Mr. K";
    console.log("Line no 6 " + name);

    sayName2();
    function sayName2(){
        console.log("Line no 9 " + name);
        
    }
}
sayName();