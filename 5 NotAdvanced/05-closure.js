function init(){
    var firstName = "krish"
    function sayFirstName() {
        console.log(firstName);
    }
    return sayFirstName;
}
init();

var value = init();