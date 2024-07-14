var User = {
    name: "",
    getUserName: function() {
        console.log(`User Name is: ${this.name}`);
    },
};

var krish = Object.create(User);
console.log(krish);

krish.name = "Krish Bhagwat";
krish.getUserName();

var ken = Object.create(User, {
    name: {value: "Radha"},
    couses: {value: 2},
});

ken.getUserName();
