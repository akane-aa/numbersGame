var number = Math.floor(Math.random() * 11);
var answer = parseInt(window.prompt("0~10の数字を入力してください。"));

var message;
if (answer === number) {
  message = "正解です！おめでとうございます！";
} else if (answer < number) {
  message = "不正解です。もっと大きい数字かも…";
} else if (answer > number) {
  messege = "不正解です。もっと小さい数字かも…";
} else {
  messege = "0~10の数字を入れてください。";
}
window.alert(messege);
