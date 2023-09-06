//JS data types

// number, string, null, undefined, boolean, object, bitInt, Symbol

// let a = Symbol('a')
// let b = Symbol('a')

// console.log(a == b)
console.log(null == undefined);

let isCompleted1: boolean = true;

//number
const int: number = 7;
const float: number = 3.4;
const hex: number = 0xf;
const bin: number = 0b101;

//string
const firstName: string = "Hrayr";

//undefined
const undef: undefined = undefined;

//null
const n: null = null;

//void
const greetings = (): void => {
  alert("2222");
};

function greetings1(): void {
  alert("111");
}

//array
let list1: number[] = [1, 2, 3];
let list2: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
];

let list3: Array<number> = [1, 2, 3];

//tuple
let x: [string, number];
x = ["111", 1];

let y: [string, number, boolean] = ["h1", 12, true];

//any
let yy: [any, any] = ["good", 12];
yy = [11, 12];
let zz: Array<any> = ["good", 12, true];

//enum
const enum Direction {
  RIGHT,
  LEFT,
  UP,
  DOWN,
}

console.log(Direction.RIGHT);
console.log(Direction.LEFT);
console.log(Direction.UP);
console.log(Direction.DOWN);

// console.log(Direction[0]);

enum links {
  youtube = "https://youtube.com/",
  vk = "https://vk.com/",
  facebook = "https://facebook.com/",
}

console.log(links.facebook);

//multiply type some types union
let id: number | string;
id = 10;
id = "HI";
// id = true //error

//object
const create = (obj: object | null): void => { 
}

create({ name: 'Hrayr'})
create([1, 2, 3])

//custom type creation
type Name = string | null | undefined
let person1: Name = "Anna"

person1 = "1111"

//functions
const conCat = (str1: string, str2?: string, num: number | string = 20) => `${str1}${num}${str2}`

//never
function infiniteLoop(): never {
    while (true) { }
}
 
function errorFunc(): never {
    throw new Error
 }