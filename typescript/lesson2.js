//js rest
// const createSkills = (name, ...skills) => {
//     `${name}, my skills are ${skills.join()}`
// }
// object 
var user = {
    name: "Hrayr",
    age: 28,
    //lastName: 'Ashchyan'
};
var admin = {
    name: 'Artur',
    lastName: 'Davtyan',
    age: 35,
};
//classes
// class User {
//     fName: string
//     lName: string
//     age: number
//     constructor(fName: string, lName: string, age: number) {
//         this.fName = fName
//         this.lName = lName
//         this.age = age
//     }
//     info() : void {
//         console.log('log info ', this.fName)
//     }
// }
// const person1 = new User('Hrayr', 'Ashchyan', 28)
// person1.info()
// class User {
//     public fName: string
//     protected lName: string
//     private age: number
//     readonly login: number | string
//     constructor(fName: string, lName: string, age: number, login: number | string) {
//         this.fName = fName
//         this.lName = lName
//         this.age = age
//         this.login = login
//     }
//     info() : void {
//         console.log('log info ', this.fName)
//     }
// }
// const person1 = new User('Hrayr', 'Ashchyan', 28, "111111")
// person1.info()
// person1.fName = "111"
var User = /** @class */ (function () {
    function User(fName, lName, age, login) {
        this.age = 27;
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    User.prototype.info = function () {
        console.log('log info ', this.fName);
    };
    return User;
}());
var person1 = new User('Hrayr', 'Ashchyan', 28, "111111");
person1.info();
person1.fName = "111";
var User1 = /** @class */ (function () {
    function User1(fName, lName, age, pass) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.pass = pass;
    }
    return User1;
}());
//accessors getters, setters
var User3 = /** @class */ (function () {
    function User3(name) {
        this.name = name;
        this.age = 20;
    }
    User3.prototype.setAge = function (age) {
        this.age = age;
        return this.age;
    };
    User3.prototype.getAge = function () {
        return this.age;
    };
    Object.defineProperty(User3.prototype, "myAge", {
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User3.prototype, "Age", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    return User3;
}());
var obj = new User3('Hrayr');
console.log(obj);
obj.getAge();
obj.setAge(40);
console.log(obj.Age);
obj.myAge = 33;
console.log(obj.Age);
var User4 = /** @class */ (function () {
    function User4(name, age) {
        this.name = name;
        this.age = age;
    }
    User4.prototype.getPass = function () {
        return "".concat(this.name).concat(User4.secret);
    };
    User4.secret = 12345;
    return User4;
}());
var hrayr = new User4("Hrayr", 28);
console.log(hrayr.getPass());
