//Ép kiểu: Cách chuyển đổi giữa các kiểu dữ liệu với nhau

//1. Chuyển đổi các kiểu dữ liệu sang number (Thường là chuỗi sang number)
// let a = null;
// // a = Number(a);
// a = +a;
// console.log(a, typeof a);

//2. Chuyển các kiểu dữ liệu sang string

// let a = 12;
// // a = a + "";
// // a = String(a);
// a = a.toString();
// console.log(a, typeof a);

// let price = 1234;
// price = price.toString().split("").reverse().join("");
// price = +price;
// console.log(price);

//3. Chuyển các kiểu sang boolean
// Các giá trị sau: 0, null, undefined, "", NaN, false --> false
// Còn lại là true
let a = 0;
a = Boolean(a);
console.log(a, typeof a);
