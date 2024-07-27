class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];

    getInfo(){
        return {name: this.name, email: this.email};
    }
    enreollInCourse(name){
        this.#courseList.push(name);
    }
    getCourseList(){
        return this.#courseList;
    }
    login(){
        return "you are logged in";
    }
}

class subAdmin extends user{
    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return "I am sub-Admin";
    }
    login(){
        return "login for admin only"

    }
}


module.exports = user;


const rock = new user("rock", "rock@rock.com")
// console.log(rock.getInfo());
rock.enreollInCourse("Angular Bootcamp");
// console.log(rock.getCourseList());
// console.log(rock.courseList);

const tom = new subAdmin("tom", "tom@jeery.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());