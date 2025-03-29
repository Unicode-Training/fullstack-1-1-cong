//Kiểu dữ liệu
//1. Kiểu dữ liệu nguyên thủy
//- number
//- string
//- boolean
//- null
//- undefined
//- symbol
// - bigint

//2. Kiểu dữ liệu tham chiếu
// - object: array, object literal, function

//Kiểm tra 1 giá trị thuộc kiểu nào: Dùng typeof

//number
let a = 10;
console.log(a, typeof a);

//string
let fullname = "Hoàng An";
console.log(fullname, typeof fullname);

//boolean
let isLogin = false;
console.log(isLogin, typeof isLogin);

//null
let user = null;
console.log(user, typeof user);

//undefined
let age;
console.log(age, typeof age);

//symbol
let id = Symbol("id");
console.log(id, typeof id);

//bigint
// let b = 1000n;
let b = BigInt(1000);
console.log(b, typeof b);

//object
let user1 = {
  nane: "Hoàng An",
};
console.log(user1, typeof user1);

const arr = [1, 2, 3];
console.log(arr, typeof arr);

const func = function () {};
console.log(func, typeof func);
