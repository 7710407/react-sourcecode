//js rest
// const createSkills = (name, ...skills) => {
//     `${name}, my skills are ${skills.join()}`
// }

// createSkills('Hrayr', 'TS', 'ES6', 'React')

//TS rest
// const createSkills = (name: string, ...skills: Array<string>) : string => {
//     return `${name}, my skills are ${skills.join()}`
// }

// console.log(createSkills('Hrayr', 'TS', 'ES6', 'React'))

type Person = { name: string; age: number; lastName?: string } 

// object 
let user: Person = {
    name: "Hrayr",
    age: 28,
    //lastName: 'Ashchyan'
}

let admin: Person = {
    name: 'Artur',
    lastName: 'Davtyan',
    age: 35,
}

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

class User { 
    public fName: string
    public lName: string
    public age: number = 27

    constructor(fName: string, lName: string, age: number, login: number | string) { 
        this.fName = fName
        this.lName = lName
        this.age = age
    }

    info() : void { 
        console.log('log info ', this.fName)
    }
}

const person1 = new User('Hrayr', 'Ashchyan', 28, "111111")
person1.info()
person1.fName = "111"

class User1 { 
    constructor(
        public fName: string,
        public lName: string,
        public age: number,
        public pass: number
    ) { }
}

//accessors getters, setters
class User3 { 
    private age: number = 20;
    public constructor(private name: string) { }

    setAge(age: number) { 
        this.age = age
        return this.age
    }

    getAge() { 
        return this.age
    }

    set myAge(age: number) { 
        this.age = age
    }

    get Age() { 
        return this.age
    }
}

const obj = new User3('Hrayr')

console.log(obj)
obj.getAge()
obj.setAge(40)
console.log(obj.Age)
obj.myAge = 33
console.log(obj.Age)

class User4 { 
    static secret = 12345
    protected nickName: string = 'hrayr99'
    private pass: number = 22222
    constructor(public name: string, public age: number) { }
    getSecret(): string { 
        return `${this.name}${User4.secret}`
    }
}

const hrayr = new User4("Hrayr", 28)
console.log(hrayr.getSecret())

class Hrayr extends User4 { 
    constructor(fName: string, age: number, public job: string) {
        super(fName, age)
    }

    //overriding parent method
    getSecret(): string {
        return '111111'
    }
}