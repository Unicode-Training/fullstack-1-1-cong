//Câu lệnh rẽ nhánh
/*
1. Câu lệnh if thiếu
if (dieukien) {
    Code
}

2. Câu lệnh if else đầy đủ
if (dieukien) {
    Code
} else {
    Code
}

3. Câu lệnh if else nhiều nhánh
if (dieukien) {
    Code
} else if (dieukien) {
    Code
} else {
    Code
}

4. Câu lệnh if else lồng nhau
if (dieukien) {
    if (dieukien) {
        Code
    } else {
     Code
    }
} else {
    Code
}
*/

/*
Bài tập: Tính lương thực nhận của 1 nhân viên sau khi trừ thuế
- <= 5tr --> Thuế 0%
- Nếu > 5tr và <= 10tr --> Thuế 3%
- Nếu > 10tr và <= 20tr --> Thuế 5%
- Nếu > 20tr --> 8%
*/
let salary = 25000000;
let income;
let tax;
const RANGE_1 = 5000000;
const RANGE_2 = 10000000;
const RANGE_3 = 20000000;
if (salary > 0) {
  if (salary <= RANGE_1) {
    tax = 0;
  } else if (salary <= RANGE_2) {
    tax = 3;
  } else if (salary <= RANGE_3) {
    tax = 5;
  } else {
    tax = 8;
  }
  income = salary - (salary * tax) / 100;
  console.log(income);
}

//Bài tập 2: Tính tiền taxi, cho trước số km cần di chuyển
/*
Số km <= 1 --> Giá 15000
Số km > 1 và <=5 --> Giá 13500
Số km > 5 --> Giá 11000
Nếu số km > 120 --> Giảm 10% trên tổng số tiền

Ví dụ: Đi 4km

1km x 15000 + 3km x 13500

Đi 6km

1km x 15000 + 4km x 13500 + 1km x 11000

Đi 200km

1km x 15000 + 4km x 13500 + 195km x 11000 --> giảm thêm 10% 
*/
