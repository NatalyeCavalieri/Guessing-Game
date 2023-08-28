//variaveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")


let randomNumber = Math.round(Math.random() * 10)
let xAttempts =1;

//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enter)

 

//função Callback
function handleTryClick (event){
  event.preventDefault()
  

  const inputNumber = document.querySelector("#inputNumber")
  const userNumber = Number(inputNumber.value);

  if (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
    alert("Por favor, insira um número entre 0 e 10.");
    return;
  }

  if (userNumber === randomNumber) {
    toggleScreen();

  
  document
  .querySelector(".screen2 h2")
  .innerText = `Voce acertou em ${xAttempts} tentativas`
}
inputNumber.value = ""
xAttempts++;

}

  

function handleResetClick(){
toggleScreen()
xAttempts=1
randomNumber = Math.round(Math.random() * 10)
}
  

function toggleScreen(){
screen1.classList.toggle("hide")
screen2.classList.toggle("hide")
}


function enter (e){
  if(e.key == 'Enter'&& screen1.classList.contains('hide')){
    handleResetClick()
  }
}