// let n = 10;
/*
1 
2 3
4 5 6
7 8 9 10
11 12 13 14 15 
*/

// let html = ``;
// let count = 0;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     html += ++count + " ";
//   }
//   html += `<br/>`;
// }
// document.body.innerHTML = html;

let html = `<table border="1" cellpadding="0" cellspacing="0" width="100%">`;

for (let i = 1; i <= 8; i++) {
  html += `<tr>`;
  for (let j = 1; j <= 8; j++) {
    const total = i + j;
    const className = total % 2 !== 0 ? `class="black"` : "";
    html += `<td ${className}></td>`;
  }
  html += `</tr>`;
}

html += `</table>`;

document.body.innerHTML = html;
