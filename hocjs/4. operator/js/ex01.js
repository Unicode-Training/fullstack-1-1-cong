//Toán tử: Dùng nối các toán hạng
// Biểu thức = toán tử + toán hạng
// Ví dụ: s = 1 + 2 * 3 / 4

/*
1. Toán tử số học
+, -, *, /, %, **
++, --
*/
// let a = 10;
// let b = "20";
// let c = +a + +b;
// console.log(c);

// let a = 10;
// a++;
// ++a;
// console.log(a);

// let total;
// let count = 1;
// total = count++ + ++count;
// console.log(total);
// console.log(count);

// let a = "10";
// let b = 5;
// let c = a - b;
// console.log(c);

/*
2. Toán tử gán (=)
*/
// let a = 10;
// let b = a;

// let a = 10;
// a += 10;
// a *= 10;
// a /= 10;
// a -= 10;
// a **= 10;
// a %= 10;
// console.log(a);

/*
3. Toán tử so sánh
>, <, >=, <=, ==, !=
So sánh nghiêm ngặt (Giá trị và kiểu dữ liệu): ===, !==

Luôn trả về giá trị boolean

Tuyệt đối tránh việc so sánh với null, undefined, boolean

So sánh 2 chuỗi với nhau --> So sánh từng ký tự
*/

// let a = 10;
// let check = a >= 10;
// console.log(check);

// let a = "An";
// let b = "an";
// console.log(a < b);

/*
4. Toán tử luận lý (&&, ||, !)
Sự kết hợp các biểu thức logic

4.1. Toán tử &&:
- Tìm trường hợp sai
- Nếu tìm thấy --> Dừng lại và trả về kết quả sai
- Nếu không tìm thấy --> Trả về kết quả biểu thức cuối cùng

4.2. Toán ||
- Tìm trường hợp đúng
- Nếu tìm thấy --> Dùng lại và trả về kết quả đúng
- Nếu không tìm thấy --> Trả về kết quả biểu thức cuối cùng

4.3. Toán !
- Trả về kết quả ngược lại
- Trước khi trả về sẽ chuyển về boolean

Lưu ý: Khi kết hợp các biểu logic với 1 giá trị cụ thể tuân thủ nguyên tắc truthy, falsy
Truthy: Trong ngữ cảnh cần ép kiểu boolean --> Tự động về true
Falsy: Trong ngữ cảnh cần,ep kiểu boolean --> Tự động về false
*/

// let a = -1;
// let b = 20;
// let check = a && b > 10;
// console.log(check);

/*
5. Toán tử nullish (??)
- Cú pháp: a ?? b
- Trả về b nếu a === null, undefined
- Ngược lại sẽ là a
*/
// let a = undefined;
// let b = 20;
// let c = a ?? b;
// console.log(c);

/*
6. Toán tử 3 ngôi (?:)
- Cú pháp: a ? b : c
- Nếu a đúng --> Trả về b
- Nếu a sai --> Trả về c
*/
// let a = 10;
// let result = a ? "An" : "Công";
// console.log(result);
