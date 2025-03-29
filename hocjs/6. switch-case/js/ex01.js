//switch case
//Chỉ chấp nhận so sánh bằng (===)

const action = "remove";
switch (action) {
  case "create":
  case "insert":
  case "add":
    console.log("Thêm");
    break;

  case "update":
  case "edit":
    console.log("Sửa");
    break;
  case "delete":
  case "remove":
  case "destroy":
    console.log("Xóa");
    break;
  default:
    console.log("Không hợp lệ");
    break;
}
