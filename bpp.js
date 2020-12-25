const question = "ゲーム市場、最も売れたゲーム機は次のうちどれか？";
const answers = ["スーファミ",
"ニンテンドースイッチ",
"プレイステーション3",
"ニンテンドーDS",];
const correct = "ニンテンドーDS";

document.getElementById("js-question").textContent = question;

const $button = document.getElementsByTagName("button")
const buttonLenght = $button.length

const setupQuiz = ()=>{
  let buttonIndex = 0;
  while(buttonIndex < buttonLenght){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
}};
setupQuiz();

const clickHandler = (e) =>{
  if( correct === e.target.textContent ){
    window.alert("正解！");
  }else{
    window.alert("不正解！");
  }
};

let handlerIndex = 0;
while( handlerIndex < buttonLenght ){
  $button[handlerIndex].addEventListener("click",(e) => {
    clickHandler(e);
  });
  handlerIndex++;
};