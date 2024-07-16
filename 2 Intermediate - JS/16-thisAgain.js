console.log(this);

var user = {
    firstName: "Krish",
    courseCount: 5,
    getCourseCount: function(){
        console.log("Line 7", this);
        function sayHello(){
            console.log("Hello");
            console.log("LINE10");  
        }
        sayHello();
    },
}

user.getCourseCount();