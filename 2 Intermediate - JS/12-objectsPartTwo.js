var user = {
    firstName : "Krish",
    lastName : "Bhagwat",
    role : "admin",
    loginCount : 32,
    facebookLogin : true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function (){
        return `${this.firstName} is enrolled in a total of ${this.courseList.length} courses.`;
    },

    finalInfo : function () {
        return `${this.firstName} ${this.lastName} has a role of ${this.role} with a login count of ${this.loginCount} and is logged in using ${this.facebookLogin} is enrolled in ${courseList}`;       
    },
};
var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());

user.buyCourse("React JS Course");
console.log(user.getCourseCount());
console.log(user.finalInfo());