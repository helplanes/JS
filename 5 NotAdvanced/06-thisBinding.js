const krish = {
    firstName: "Krish",
    lastName: "Bhagwatt",
    role: "Admin",
    courseCount: 5,
    getInfo : function() {
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        & he is studying a total of ${this.courseCount} courses
            `);
    },
};

const kb = {
    firstName: "Kran",
    lastName: "Brandy",
    role: "Sub-Admin",
    courseCount: 3,
};

// krish.getInfo();
// kb.getInfo();

// krish.getInfo.bind(kb); //calling

// var kbInfo = krish.getInfo.bind(kb);
// kbInfo(); //calling

krish.getInfo.call(kb);