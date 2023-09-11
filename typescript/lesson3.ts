// abstract class User {
//     constructor(public fName: string, public age: number) {
        
//     }

//     greetings() : void {
//         console.log(this.fName)
//     }

//     abstract getName(): string
// }

// // let person = new User('Max', 20)

// class Hrayr extends User {
//     constructor(fName: string, age: number) {
//         super(fName, age)
//     }

//     getName(): string {
//         return this.fName;
//     }
// }

// const hrayr = new Hrayr('Hrayr', 28)

// interface User {
//     readonly fName: string
//     readonly age: number
//     [propName: string]: any
// }

type User1 = {
    name: string
    age: number
}

// const bob: User = {
//     fName: 'Bob',
//     age: 33,
//     nickName: 'Bobik',
//     justTest: 'test',
//     num: 123,
// }

// interface User {
//     readonly fName: string
//     readonly age: number
// }

// interface Pass {
//     getLogin(): string
// }

// class Person implements User, Pass {
//     fName: string = "John"
//     age: number = 23
//     getLogin(): string {
//         return `${this.age}${this.fName}`
//     }
// }

// let obj = new Person()
// obj.getLogin();

// interface User {
//     fName: string
//     age: number
// }

// interface Admin extends User {
//     getLogin(): string
// }

// class Person implements Admin {
//     fName: string
//     age: number
//     getLogin(): string {
//         return "hello world"
//     }
// }

// const getter = (data: any): any => data

// getter(10).length
// getter("11111111").length

//defining issue immediately
// const getter = <T>(data: T): T => data;

// // getter(10).length
// getter("hi").length

// const getter = <T>(data: T): T => data;

// getter<number>(10)
// getter<string>('hi')

// class User {
//     constructor(public name: string, public age: number) {}

//     public getLogin(): string {
//         return `${this.name}${this.age}`
//     }
// }

class User<T, K> {
    constructor(public name: T, public age: K) {}

    public getLogin(): string {
        return `${this.name}${this.age}`
    }
}

const bob = new User("Bob", "23")
const tom = new User(123, 222)
const foo = new User('Foo', 25)
