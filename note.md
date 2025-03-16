# Fullstack Web

## Kiến thức cần phải học

- Front-End: Xử lý giao diện, tương tác giữa người dùng với máy chủ
- Back-End: Xử lý các logic nghiệp vụ và dữ liệu

User => Gửi yêu cầu thông qua giao diện (Front-End) => Back-End tiếp nhận yêu cầu => Xử lý với CSDL => Trả về Front-End

Lưu ý với Front-End

HTML, CSS, JavaScript ==> Gửi cho Back-End ghép giao diện

==> Cách làm cũ (Server Side Rendering)

## HTTP

- Để client có thể giao tiếp được với server và ngược lại => Sử dụng giao thức HTTP
- Gửi yêu cầu bằng HTTP => HTTP Request
- Gửi phản hồi bằng HTTP => HTTP Response

Cấu tạo HTTP Request

- URL: Địa chỉ gửi yêu cầu
- Method: Phương thức gửi yêu cầu (GET, POST, PUT, PATCH, DELETE)
- Headers: Thông tin đi kèm được gửi từ client lên server
- Body: Nội dung cần gửi lên server

Cấu tạo HTTP Response

- Status: Trạng thái
- Headers: Thông tin đi kèm từ server trả về
- Body: Nội dung phản hồi

Lưu ý: HTTP là giao thức không liên tục

## Cách website hoạt động

- B1: Người dùng gõ tên miền lên thành trình duyệt
- B2: Trình duyệt sẽ gửi yêu cầu tới máy chủ phân giải tên miền (DNS Server)
- B3: Máy chủ phân giải tên miền trả về địa chỉ IP cho trình duyệt
- B4: Trình duyệt sẽ gửi yêu cầu tới IP của máy chủ
- B5: Máy chủ sẽ trả về nội dung cho trình duyệt

Lưu ý: Từ lần gửi yêu cầu thứ 2 trở đi => Trình duyệt sẽ không thông qua DNS Server

## Ngôn ngữ đánh dấu HTML

- Cấu tạo bởi các thẻ
- Rất nhiều thẻ nhưng mà chúng ta chỉ cần học khoảng 30 thẻ

### Nguyên tắc khi viết HTML

- Mở và đóng thẻ theo đúng thứ tự
- Các thẻ html có thể lồng nhau nhưng phải đúng thứ tự đóng mở
- Thẻ block phải bọc thẻ inline (Trừ thẻ a)

### Thẻ inline và block

1. Inline

- Chiều rộng mặc định của thẻ inline theo nội dung của thẻ
- Các thẻ inline đứng cạnh nhau sẽ nằm trên 1 hàng
- Không thay đổi được width, height của thẻ inline

2. Block

- Chiều rộng mặc định theo thẻ cha
- Luôn ở hàng mới
- Thay đổi được width, height

### Thẻ đầy đủ và thẻ tự đóng

1. Thẻ đầy đủ

Có đủ mở và đóng thẻ

```
<tenthe thuoctinh1 = "giatri1">
Nội dung
</tenthe>
```

2. Thẻ tự đóng

Chỉ có mở thẻ

```
<tenthe thuoctinh1="giatr1" />
```

### Danh sách các thẻ block

1. Thẻ heading: Thể hiện tiêu đề trên trang web cần nhấn mạnh

```
<h1>Nội dung</h1>
<h2>Nội dung</h2>
<h3>Nội dung</h3>
<h4>Nội dung</h4>
<h5>Nội dung</h5>
<h6>Nội dung</h6>
```

Nguyên tắc

- Chỉ dùng nó để nhấn mạnh tiêu đề
- Không dựa vào giao diện để quyết định dùng thẻ heading nào, mà dựa vào mục tiêu cần nhấn mạnh
- Trên 1 trang web chỉ có 1 thẻ h1
- Các thẻ heading phải liên tiếp, không được nhảy cóc

==> Semantic

Lợi ích khi viết đúng semantic

- Bộ máy tìm kiếm đánh giá cao ==> Lên TOP
- Lập trình viên trong đội ngũ sẽ dễ hiểu hơn
- Hỗ trợ tốt cho các máy đọc dành cho người khiếm thị (Website Accessibility)

2. Thẻ đoạn văn

```
<p>Nội dung đoạn văn</p>
```

Chỉ chứa văn bản và thẻ ngắt dòng, thẻ định dạng: đậm, nghiêng, gạch chân

Để ngắt dòng trong đoạn văn dùng thẻ `<br/>`

Lưu ý khi ngắt dòng: Chỉ áp dụng thẻ `<br/>` khi ngắt dòng văn bản (Không được áp dụng cho các trường hợp khác)

3. Thẻ phân chia nội dung (div)

- Không thay đổi định dạng của trang web
- Dùng để nhóm các thẻ khác: Cả block và inline
- Thường được dùng để phân chia bố cục của trang web (Có sự hỗ trợ của CSS)

==> Áp dụng nhiều khi học sang CSS

4. Thẻ định dạng danh sách

4.1. Danh sách không sắp xếp

```
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
</ul>
```

4.1. Danh sách có sắp xếp

```
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
</ol>
```

5. Thẻ trích dẫn

- Trích dẫn nội dung của 1 người hoặc nội dung trang web khác

```
<blockquote>
    Nội dung trích dẫn
</blockquote>
```

6. Thẻ gạch ngang (hr)

```
<hr />
```

7. Thẻ pre

- Giữ nguyên định dạng từ server trả về

```
<pre>
    Nội dung
            abc
</pre>
```

### HTML Entity

- Thực thể của thẻ html
- Quy ước:

<: &lt;

> : &gt;

Tác dụng của HTML Entity:

- Tránh lỗi bảo mật XSS
- Thể hiện 1 số nội dung mà trình duyệt không cho phép

### Các thẻ HTML5

Mục đích: Semantic hơn

## Danh sách thẻ inline

1. Thẻ chèn liên kết

Cú pháp

```
<a href="dia_chi_trang_web">Nội dung</a>
```

Thuộc tính

- target: Mục tiêu cần mở (tab hiện tại, tab mới)
- title: Tiêu đề khi người dùng trỏ chuột vào liên kết (Thuộc tính này xuất hiện ở tất cả các thẻ html)

Đường dẫn tương đối: Bị phụ thuộc vào vị trí thư mục đang đứng

duong-dan
./duong-dan

Đường dẫn tuyệt đối: Không bị phụ thuộc vào vị trí thư mục đang đứng

/duong-dan
//tenmien/duong-dan
http://tenmien/duong-dan

Quy tắc khi dùng dấu # trên url

- Không tải lại trang (Xử lý ở client)
- Tự động tìm đến thẻ html có id khớp với nội dung phía sau #
- Nếu sau # không có nội dung -> Nhảy lên đầu trang
- Nếu sau # có nội dung nhưng không tìm thấy id => Đứng im

2. Thẻ chèn hình ảnh

```
<img src="link-ảnh" title="Tiêu đề khi trỏ chuột" alt="Văn bản thay thế" width="chiều rộng" height="chiều cao"/>
```

3. Thẻ định dạng kiểu (span)

- span: Không thay đổi định dạng của văn bản
- Là thẻ non-semantic (Không có ý nghĩa)
- Được dùng để hỗ trợ CSS và đáp ứng inline

4. Thẻ định dạng văn bản

```
<b>In đậm</b>
<i>In nghiêng</i>
<u>Gạch chân</u>
<s>Gạch ngang</s>
```

5. Thẻ định dạng công thức

6. Table

7. Form

- Trong 1 trang web có thể có nhiều form
- Trong 1 form = trường + nút gửi
- Không được lồng nhau

# Ngôn ngữ định dạng CSS

- Tạo bố cục của trang web
- Làm đẹp

## 3 cách chèn css vào html

1. Chèn trực tiếp trong trang html thông qua thẻ style (Internal CSS)

```
<style>
    css
</style>
```

2. Tách code css thành file .css (External)

```
<link href="link-css" rel="stylesheet" />
```

3. Viết CSS trực tiếp vào thẻ html thông qua thuộc tính style (Inline css)

## Cách đặt tên class, id

- id: Chỉ có 1
- class: Có thể có nhiều

* Sử dụng danh từ để đặt tên class, id
* Dùng Tiếng Anh
* Chấp nhận: chữ cái, gạch ngang, gạch dưới, 1 số ký tự đặc biệt
* Không được bắt đầu bằng số

```
<div class="container container-lg" id="main">
    <h1 class="title">Học lập trình không khó</h1>
    <p class="text">
        Nội dung
    </p>
</div>
```

- Thường sẽ đặt class cho thẻ html
- Dùng id trong 1 số trường hợp sau:

* Can thiệp js
* Tăng độ ưu tiên

## Cấu trúc CSS

```css
selector1 {
  thuoctinh1: value1;
  thuoctinh2: value2;
  thuoctinh3: value3;
  thuoctinh4: value4;
}

selector2 {
  thuoctinh1: value1;
  thuoctinh2: value2;
  thuoctinh3: value3;
  thuoctinh4: value4;
}
```

## Comment CSS

```css
/*
Nội dung comment
*/
```

## Selector

1. Selector cơ bản

- id --> #id
- class -> .class
- tagname -> tagname

2. Selector kết hợp

2.1. Kết hợp nằm trong

```
selector1 selector2 selector3 {

}
```

2.2. Kết hợp cha con

```
selector1 > selector2 > selector3 {

}
```

2.3. Kết hợp cùng cấp

```
selector1selector2selector3 {

}
```

Lưu ý:

- Không quan trọng thứ tự
- Nếu trong danh sách selector có tagname --> Đặt tagname ở đầu

  2.3. Kết hợp ngang hàng

```
selector1 ~ selector2 {

}
```

Lưu ý:

- selector2 phải đứng sau selector1
- selector2 và selector1 phải cùng thuộc 1 cha

  2.4. Kết hợp ngang hàng liền kề

```
selector1 + selector2 {
}
```

2.5. Kết hợp kế thừa

```
selector1, selector2, selector3 {

}
```

2.6. Attribute Selector

tenthe[thuoctinh] --> Chọn thẻ có thuộc tính

tenthe[thuoctinh="giatri"] --> Chọn thẻ có thuộc tính khớp với giá trị

tenthe[thuoctinh^="giatri"] --> Chọn thẻ có thuộc tính bắt đầu bằng giá trị

tenthe[thuoctinh*="giatri"] --> Chọn thẻ có thuộc tính chứa nội dung

tenthe[thuoctinh^="giatri"] --> Chọn thẻ có thuộc tính kết thúc bằng giá trị

## Pseudo

1. Pseudo Element

selector::tenphantu {

}

- before --> Phần tử phía trước nội dung
- after --> Phần tử phía sau nội dung
- first-line --> Dòng đầu tiên của văn bản
- first-letter --> Ký tự đầu tiên của văn bản
- selection --> Lựa chọn
- placeholder --> Phần tử tạm của form

Lưu ý: before, after chỉ hoạt động khi có thuộc tính content

2. Pseudo Class

selector:tenseudo {

}

- hover, active, focus (Chỉ áp dụng với form)
- checked, disabled
- first-child, last-child
- first-of-type, last-of-type
- nth-child(number)
- nth-of-type(number)

## Các thuộc tính định dạng văn bản

1. Thuộc tính color

- Thay đổi màu của văn bản
- Thay đổi opacity của màu
- Màu trong suốt: transparent
- Thuộc tính kế thừa

2. Thuộc tính font-size

- Thay đổi cỡ chữ của văn bản
- font-size: giatri + donvi

* px, pt --> Đơn vị tuyệt đối
* em --> Tương đối, tỷ lệ với font-size của phần tử cha
* rem --> Tương đối, tỷ lệ với mặc định trình duyệt

3. Thuộc tính line-height

- Thay đổi chiều cao dòng của văn bản (Giãn dòng)
- line-height: giatri (Tỷ lệ với font-size của chính nó)

4. Thuộc tính font-family

- Thay đổi font chữ cho văn bản
- font-family: tenfont1, tenfont2, tenfont3,...

5. Một số thuộc tính khác

- text-decoration: none | underline | overline | line-through
- text-transform: none | lowercase | uppercase | capitalize
- letter-spacing --> Thay đổi khoảng cách giữa các ký tự
- word-spacing --> Thay đổi khoảng cách giữa các từ
- word-wrap --> Tự động xuống dòng khi bị tràn nội dung
- text-align --> Căn chỉnh văn bản theo chiều ngang

Lưu ý:

- Có thể dùng text-align để căn chỉnh các thẻ inline
- Thẻ text-align chỉ có tác dụng khi ở thẻ block

## Thuộc tính background

- background-color: Thay đổi màu nền
- background-image: Thay đổi ảnh nền
- background-repeat: Thay đổi chế độ lặp
- background-position: Vị trí ảnh nền
- background-size: Kích thước của ảnh nền
- background-attachment: Cố định ảnh nền khi kéo thanh cuộn
- background: color image repeat position / size attachment

## Thuộc tính border

border = width + style + color

- border-width
- border-style --> none | solid | dashed | dotted | double
- border-color

Thuộc tính mở rộng

- border-{side}-width
- border-{side}-color
- border-{side}-style

size: top, left, right, bottom

Thuộc tính rút gọn: border: width style color

border-{side}: width style color

## Thuộc tính border-radius

- Bo góc
- border-radius: kichthuoc

Nếu là hình vuông, border-radius >= 50% ==> Hình tròn

Tạo hình có bo góc ôm 2 bên --> border-radius >= chiều cao

## Width-height

- Chỉ áp dụng với các thẻ block (Trừ những thẻ inline replaced: img, input, iframe,...)
- Đơn vị:

* % --> Tỷ lệ với kích thước của thẻ cha
* vh --> viewport height --> Tỷ lệ khung nhìn chiều cao của trình duyệt
* vw --> viewport width --> Tỷ lệ với khung nhìn chiều rộng của trình duyệt

Thuộc tính mở rộng

- min-width: Chiều rộng nhỏ nhất
- max-width: Chiều rộng lớn nhất
- min-height: Chiều cao nhỏ nhất
- max-height: Chiều cao lớn nhất

## padding-margin

- padding: phần đệm nằm giữa border và content
- margin: phần lề nằm ngoài border
- padding, margin chỉ hoạt động top và bottom nếu là block
- padding, margin nếu là đơn vị phần trăm --> Tỷ lệ theo width của thẻ cha
- padding không có giá trị âm
- margin có giá trị âm và auto

Các thuộc tính mở rộng

- padding-left
- padding-right
- padding-top
- padding-bottom

- margin-left
- margin-right
- margin-top
- margin-bottom

## Overflow

- Xử lý khi nội dung bị tràn
- overflow: visible|hidden|auto|scroll

## Flex (Flexible box module)

1. Trục

- Main: Trục chính
- Cross: Trục vuông góc

2. Thành phần

- Flex container
- Flex item

3. Các thuộc tính flex container

- display: flex --> Kích hoạt flexbox
- flex-direction: --> Chọn hướng cho trục chính (Mặc định nằm ngang)

* row
* row-reverse
* column
* column-reverse

- justify-content --> Điều khiển các item theo hướng của trục chính

* flex-start
* flex-end
* center
* space-around
* space-between
* space-evenly

- align-items --> Điều khiển các item theo hướng song song với trục cross

* stretch --> Kéo dãn các item theo hướng của trục cross
* flex-start
* center
* flex-end
* baseline

- flex-wrap: --> wrap các item nếu kích thước > container

* nowrap
* wrap
* wrap-reverse

- align-content --> Căn chỉnh hàng và cột

* stretch
* flex-start
* center
* flex-end
* space-around
* space-between
* space-evenly

- gap: Tạo khoảng cách giữa các item

4. Các thuộc tính trong nhóm flex item

- flex-grow: number --> giãn đều các item để lấp đầy khoảng cách còn trống trong container
- flex-shrink: number --> co lại nếu tổng kích thước các item > container
- flex-basis: kichthuoc --> Thiết lập kích thước cho item
- flex: grow shrink basis
- order: Sắp xếp các item
- align-self: Các giá trị giống align-items

## Transition

- Tạo hiệu ứng di chuyển
- Chỉ áp dụng với các thuộc tính css có giá trị là số

Các thuộc tính

- transition-property --> Chọn các thuộc tính muốn áp dụng hiệu ứng
  Ví dụ: transition: color, border-color
  Có thể dùng giá trị all để áp dụng tất cả thuộc tính

- transition-duration --> Thiết lập thời gian hoàn thành chuyển động (s, ms)

- transition-delay --> Thiết lập thời gian trễ trước khi hiệu ứng chuyển động

- transition-timing-function --> Thiết lập tốc độ của chuyển động theo quãng đường

* ease --> Chậm, nhanh, chậm
* ease-in --> Chậm, nhanh
* ease-out --> Nhanh, chậm
* ease-in-out --> Chậm, nhanh, chậm
* linear --> Đều

- transition: propery duration delay timing

## Transform

- Thay đổi hình dạng ban đầu của thẻ html
- Xoay, Nghiêng, Di chuyển, phóng to, thu nhỏ

Cú pháp: transform: giatri

- rotate(angle) --> Xoay theo trục Z (Có thể sử dụng thuộc tính rotate)
- rotateX(angle) --> Xoay theo trục X (Nằm ngang)
- rotateY(angle) --> Xoay theo trục Y (Nằm dọc)

- scale(x,y) --> Phóng to, thu nhỏ theo 2 trục x, y (Có thể sử dụng thuộc tính scale)
- scaleX(value) --> Phóng to, thu nhỏ theo trục X
- scaleY(value) --> Phóng to, thu nhỏ theo trục Y

- skew(angleX, angleX) --> Nghiêng theo trục x, y
- skewX(angle) --> Nghiêng theo trục x
- skewY(angle) --> Nghiêng theo trục Y

- translate(x, y) --> Di chuyển ra khỏi vị trí ban đầu (Không làm thay đổi bố cục)
- translateX(value) --> Di chuyển theo trục X
- translateY(value) --> Di chuyển theo trục Y
  Nếu dùng đơn vị phần trăm --> Tỷ lệ với width, height của chính nó

Có thể sử dụng thuộc tính translate để thay thế cho transform: translate(x,y)

## Animation

- Tạo ra hiệu ứng cho trang web
- Có 2 phần

* keyframes
* animation

```css
@keyframes ten-keyframe {
  from {
  }

  tỷ lệ % {
  }

  to {
  }
}
```

from: Tương ứng với 0% theo duration của animation
to: Tương ứng với 100% theo duration của animation

Animation

- animation-name: ten-keyframe
- animation-duration: thoi-gian
- animation-delay: thoi-gian-tre
- animation-timing-function: tốc độ
- animation-interation-count: solan (vô hạn = infinite)
- animation: name duration delay timing count

## Responsive

- Thiết kế web thích ứng
- Dùng css để thay đổi giao diện dựa theo kích thước màn hình (width)
- Dự án lớn dùng Adaptive (Phiên bản giao diện khác, nhận diện qua thiết bị)

1. Breakpoint

- Điểm dừng màn hình khiến giao diện thay đổi
- Không có breakpoint bất bại cho mọi dự án
- Breakpoint phổ biến (Tham khảo bootstrap, tailwind css)

* 576px
* 768px
* 992px
* 1200px
* 1400px

2. Media Queries

- At-rule của CSS cho phép áp dụng breakpoint vào trang web
- 2 trường phải: Desktop first, mobile first

Desktop first

```css
selector {
  thuoctinh: giatri;
}

@media screen and (max-width: 1399.98px) {
  selector {
    thuoctinh: giatri;
  }
}
@media screen and (max-width: 1199.98px) {
  selector {
    thuoctinh: giatri;
  }
}
@media screen and (max-width: 991.98px) {
  selector {
    thuoctinh: giatri;
  }
}
@media screen and (max-width: 767.98px) {
  selector {
    thuoctinh: giatri;
  }
}
@media screen and (max-width: 756.98px) {
  selector {
    thuoctinh: giatri;
  }
}
```

Mobile first

```css
selector {
  thuoctinh: giatri;
}

@media screen and (min-width: 576px) {
  selector {
    thuoctinh: giatri;
  }
}
@media screen and (min-width: 768px) {
  selector {
    thuoctinh: giatri;
  }
}
@media screen and (min-width: 992px) {
  selector {
    thuoctinh: giatri;
  }
}
@media screen and (min-width: 1200px) {
  selector {
    thuoctinh: giatri;
  }
}
@media screen and (min-width: 1400px) {
  selector {
    thuoctinh: giatri;
  }
}
```
