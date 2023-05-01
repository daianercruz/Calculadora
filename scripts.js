const previousOperationText = document.querySelector("#operacao-prev");
const currentOperationText = document.querySelector("#operacao-corrente");
const buttons = document.querySelectorAll("#botoes button");

class Calculator {
 constructor(previousOperationText,currentOperationText){
 this.previousOperationText = previousOperationText;
 this.currentOperationText = currentOperationText;
 this.currentOperation = "";

}
//Criando a tela da calculadora 
addDigit(digit){


this.currentOperation = digit;

this.updateScreen();
}

updateScreen(){
    this.currentOperationText.innerText += this.currentOperation;
}
}

const calc = new Calculator(previousOperationText,currentOperationText);

buttons.forEach((btn)=>{
   btn.addEventListener("click",(e) =>{
    const value =e.target.innerText;

    if(+value>=0 ||value==="."){

        calc.addDigit(value)

    }else{
        console.log("op:" + value);
    }

   })


});

