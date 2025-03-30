//Function:
/*
- Cú pháp của ngôn ngữ lập trình
- Cho phép nhóm các đoạn chương trình để có thể gọi lại
- Trong JS, hàm là object

Cú pháp: (Decration function)
function tenham(thamso1, thamso2,...) {
    Code
}

function tenham() {
    Code
}

Gọi hàm: 
tenHam(doiso1, doiso2,...)
tenHam()

Lưu ý tên hàm:
- Dùng camelCase
- Động từ
*/

// function showMessage(msg, status = "ok") {
//   console.log("Hello world");
//   console.log(msg);
//   console.log(status);
// }
// showMessage("Hoàng An");

// function sum(a, b) {
//   let total = a + b;
//   console.log(total);
//   return;
//   console.log(111);
// }
// const result = sum(10, 20);
// console.log(result);

// function division(a, b = 0) {
//   if (b === 0) {
//     return -1;
//   }
//   return a / b;
// }
// console.log(division(10, 2));

//Expression function

// const getMessage = function () {
//   return "Hello world";
// };
// const showMessage = function showMsg() {
//   return "Hello world";
// };

// function showMsg() {
//   return "Hello world";
// }
// const showMessage = showMsg;
// const showMessage2 = showMessage;

// console.log(showMessage());
// console.log(showMsg());
// console.log(showMessage2());

// if (typeof getMessage === "function") {
//   console.log(getMessage());
// }

//Biến toàn cục, cục bộ
// let a = 10; //global scope (global variable)
// const showMessage = function () {
//   let b = 20;
//   console.log(a);
//   a = 20;
//   if (b === 20) {
//     let b = 30;
//     console.log(b);
//   }
// };
// showMessage();
// console.log(a);

// let data = "Học lập trình không khó";
// const showData = function () {
//   return data;
// };
// const setData = function (value) {
//   data = value;
// };
// setData("Học lập trình quá khó");
// console.log(showData());

// ...khi định nghĩa hàm --> rest parameter
// ...khi gọi hàm --> spread operator
// const display = function (a, func, ...args) {
//   console.log(a);

//   if (typeof func === "function") {
//     func(...args);
//     // func.apply(null, args);
//   }
// };
// const showMessage = function (msg, status, isShow) {
//   console.log("Hello world", msg, status, isShow);
// };

// display(10, showMessage, "Unicode", "Công", "An"); //Gọi hàm

//setTimeout
// const id = setTimeout(
//   function (a, b) {
//     console.log("Ok chưa?", a, b);
//   },
//   1000,
//   "Học lập trình khó",
//   "Công"
// );
// console.log(id);

//setInterval()
// let count = 0;
// const id = setInterval(function () {
//   console.log("Hello world:", ++count);
//   if (count === 10) {
//     clearInterval(id);
//   }
// }, 1000);

// setTimeout(function () {
//   console.log("Hello world");
// }, 0);
// console.log("Ok");

//Closure: Hàm cho phép truy cập vào các biến nằm ở ngoài của nó
let b = 20;
function display(c) {
  let a = 10;

  return function (d) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
  };
}
const showNumber = display("Unicode");
showNumber("Ahihi");
