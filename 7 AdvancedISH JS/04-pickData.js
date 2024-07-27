const user = ["Krish", 5, "admin"];

// var role = user[2];
// var nane = user[0];

// var [name, courseCount, role] = user;

// console.log(courseCount);

const myUser = {
    name: "Krish",
    courseCount: 3,
    role: "Boobie", 
};
console.log(myUser.courseCount);

const {name, courseCount, role} = myUser;
console.log(role);