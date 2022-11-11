
const field= document.querySelector('.gameCanvas');
const fieldRect= field.getBoundingClientRect() //게임 싸이즈 포지션/위치 알기


//create money inside of canvas
function initGame(){
    console.log(fieldRect)
    addItem('money', 10, '')
}

 function addItem(){

 }


initGame();