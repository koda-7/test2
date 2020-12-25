const question = "ゲーム市場、最も売れたゲーム機はどれか？";
const answers = [
"ニンテンドースイッチ",
"ニンテンドーDS",
"セガサターン",
"プレイステーション3"];
const correct = "プレイステーション3";

document.getElementById("js-question").textContent = question; //textContentを忘れたいた

const button = document.getElementsByTagName("button")

// button[0].textContent = answers[0]; //呼び出し方を忘れていた
// button[1].textContent = answers[1];
// button[2].textContent = answers[2];
// button[3].textContent = answers[3];

// 問題文を定義
const setupQuiz = ()=>{
  let buttonIndex = 0;
  let buttonLenght = button.length;
  while(buttonIndex < buttonLenght){
    button[buttonIndex].textContent = answers[buttonIndex]; //ここの記述理解X
    buttonIndex++;
  }
};

setupQuiz(); //要注意：関数を呼び出すこと！




button[0].addEventListener("click",(e) => {
  if(correct === e.target.textContent){
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
});

button[1].addEventListener("click",(e) => {
  if(correct === e.target.textContent){
    window.alert("正解!!！");
  } else {
    window.alert("不正解！");
  }
});

button[2].addEventListener("click",(e) => {
  if(correct === e.target.textContent){
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
});

button[3].addEventListener("click",(e) => {
  if(correct === e.target.textContent){
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
});
