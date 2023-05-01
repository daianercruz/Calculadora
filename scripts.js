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
//operacao para verificar se já tem um ponto
if(digit === "." && this.currentOperationText.innerText.includes(".")){
    return;
}

this.currentOperation = digit;
this.updateScreen();
}

//processos de operações da calculadora 
processOperation(operation){
    
let operationValue
let previous = +this.previousOperationText.innerText.split(" ")[0];
const current = +this.currentOperationText.innerText;

switch(operation){
    case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue,operation,current,previous);
    break;
    default:
        return;
}
}

updateScreen(operationValue=null,operation=null, current=null,previous=null){
    if (operationValue === null) {
        this.currentOperationText.innerText += this.currentOperation;
      } else {
        if (previous === 0) {
          operationValue = current;
        }
        this.previousOperationText.innerText = `${operationValue} ${operation}`;
        this.currentOperationText.innerText = "";
      }
}
}

const calc = new Calculator(previousOperationText,currentOperationText);

buttons.forEach((btn)=>{
   btn.addEventListener("click",(e) =>{
    const value =e.target.innerText;

    if(+value>=0 ||value==="."){

        calc.addDigit(value)

    }else{
        calc.processOperation(value);
    }

   })


});

