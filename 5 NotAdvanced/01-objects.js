var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`Course Count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function() {
    console.log(`Your First Name Is: ${this.firstName}`);
};

var hitesh = new User("hitesh", 2);
hitesh.getCourseCount();
if (hitesh.hasOwnProperty("firstName")) {
    hitesh.getFirstName();
};

//console.log(hitesh);
var krish = new User("Krish", 5);
krish.getCourseCount();
krish.getFirstName();   
console.log(krish);

// NEW KEYWORD

// var member = function(username, admin, user) {
//     this.username = username;
//     this.admin = admin;
//     this.user = user;
//     this.getRights = function() {
//         console.log(`This member's Rights are: ${this.admin}`);
//     };
// };

// member.prototype.getUsername = function() {
//     console.log(`This members username is: ${this.username}`);
// };

// var krish = new member("Krish", "all rights");
// krish.getUsername();
// krish.getRights();