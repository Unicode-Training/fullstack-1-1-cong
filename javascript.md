# Ngôn ngữ lập trình JavaScript

## Tổng quan

- Ngôn ngữ lập trình kịch bản phía client (Chạy trên trình duyệt)
- Ban đầu, giải quyết các bài toán xử lý giao diện, sự kiện, ajax,...
- Khi NodeJS ra đời, JS chạy được các môi trường khác --> Back-end, mobile app, desktop app

## Cách đưa JS vào HTML

1. Chèn JS vào HTML thông qua thẻ script

```
<script>
    code js
</script>
```

2. Chèn JS vào HTML thông qua file js riêng

```
<script src="duong-dan-file-js"></script>
```

3. Chèn JS vào trực tiếp các thẻ html thông qua sự kiện (Hành động của người dùng tác động lên các thẻ html)

## Biến

```
let tenbien;
let tenbien = giatri;
let tenbien1, tenbien2;
```

Quy tắc:

- Chỉ chấp nhận chữ thường, hoa, số, gạch dưới và $
- Không được bắt đầu bằng số
- Không được đặt tên biến trùng với từ khóa của js
- Nên đặt tên theo quy tắc camelCase

Ví dụ: customerId, customerName, userAddressShipping

Lưu ý:

- Thay đổi lại giá trị
- Không được khai báo lại biến trong cùng 1 phạm vi

## Hằng số

```
const tenhang = giatri;
```

Quy tắc:

- Giống như biến
- Trong 1 số trường hợp có thể khai báo dưới chữ hoa và nối bằng gạch dưới

Ví dụ:

const NAVIGATE_TIMEOUT = 1000;

## Hiển thị nội dung lên màn hình trình duyệt

1. Dùng hàm documnent.write()

```js
documnent.write(noidung);
```

2. Dùng DOM

```js
document.body.innerHTML = noidung;
```
