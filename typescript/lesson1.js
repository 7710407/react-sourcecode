//JS data types
// number, string, null, undefined, boolean, object, bitInt, Symbol
// let a = Symbol('a')
// let b = Symbol('a')
// console.log(a == b)
console.log(null == undefined);
var isCompleted1 = true;
//number
var int = 7;
var float = 3.4;
var hex = 0xf;
var bin = 5;
//string
var firstName = "Hrayr";
//undefined
var undef = undefined;
//null
var n = null;
//void
var greetings = function () {
    alert("2222");
};
function greetings1() {
    alert("111");
}
//array
var list1 = [1, 2, 3];
var list2 = [
    [1, 2, 3],
    [1, 2, 3],
];
var list3 = [1, 2, 3];
//tuple
var x;
x = ["111", 1];
var y = ["h1", 12, true];
//any
var yy = ["good", 12];
yy = [11, 12];
var zz = ["good", 12, true];
console.log(0 /* Direction.RIGHT */);
console.log(1 /* Direction.LEFT */);
console.log(2 /* Direction.UP */);
console.log(3 /* Direction.DOWN */);
// console.log(Direction[0]);
var links;
(function (links) {
    links["youtube"] = "https://youtube.com/";
    links["vk"] = "https://vk.com/";
    links["facebook"] = "https://facebook.com/";
})(links || (links = {}));
console.log(links.facebook);
//multiply type some types union
var id;
id = 10;
id = "HI";
