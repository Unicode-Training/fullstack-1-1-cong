//Vòng lặp: Cú pháp trong lập trình cho phép đoạn chương trình lặp đi lặp theo số lần nào đó
// Có 2 loại:
//  - Lặp với số lần lặp xác định (for)
//  - Lặp số lần lặp không xác định (while, do while)

//Vòng lặp for
/*
for (giatrikhoitao; dieukien; buocnhay) {
    Code
}
*/

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(`i = ${i}, j = ${j}`);
//   }
// }

//Bài tập: Tính tổng các số chẵn từ 1 đến n
// let n = 10;
// let total = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }
// console.log(total);

//Bài tập: Tính giá trị biểu thức sau
// s = 1 + 1*2 + 1*2*3 + ... + 1*2*3*...*n
let n = 5;
// s = 1 + 1*2 + 1*2*3 + 1*2*3*4 + 1*2*3*4*5
let tmp = 1;
let total = 0;
for (let i = 1; i <= n; i++) {
  tmp *= i;
  total += tmp;
}
console.log(total);
