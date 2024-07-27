// import user from "./06-class";

const user = require("./06-class");

const krish = new user("krish", "krish@gmail.com")

console.log(krish.getInfo());

krish.enreollInCourse("React BootCamp");
krish.enreollInCourse("Angular BootCamp");

console.log(krish.getCourseList());

let courses = krish.getCourseList();

courses.forEach((c) => console.log(c));
courses.count();