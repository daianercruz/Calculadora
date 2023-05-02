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
    if (this.currentOperationText.innerText === "" && operation !== "C") {
        if (this.previousOperationText.innerText !== "") {
          this.changeOperation(operation);
        }
        return;
      }
    
let operationValue
let previous = +this.previousOperationText.innerText.split(" ")[0];
const current = +this.currentOperationText.innerText;

switch(operation){
    case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue,operation,current,previous);
    break;
    case "-":
        operationValue = previous - current;
        this.updateScreen(operationValue,operation,current,previous);
    break;
    case "*":
        operationValue = previous * current;
        this.updateScreen(operationValue,operation,current,previous);
    break;
    case "/":
        operationValue = previous / current;
        this.updateScreen(operationValue,operation,current,previous);
    break;
    case "DEL":
        this.processOperation();
    break;
    case "CE":
        this.processClearCurrentOperator();
    break;
    case "C":
        this.processClearOperator();
    break;
    case "=":
        this.processEqualOperator();
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
    changeOperation(operation) {
      const mathOperations = ["*", "-", "+", "/"];
  
      if (!mathOperations.includes(operation)) {
        return;
      }
  
      this.previousOperationText.innerText =
        this.previousOperationText.innerText.slice(0, -1) + operation;
    }
  
    processDelOperator() {
      this.currentOperationText.innerText =
        this.currentOperationText.innerText.slice(0, -1);
    }
  
    processClearCurrentOperator() {
      this.currentOperationText.innerText = "";
    }
  
    // limpar a operacao
    processClearOperator() {
      this.currentOperationText.innerText = "";
      this.previousOperationText.innerText = "";
    }
    processEqualOperator() {
  let operation = this.previousOperationText.innerText.split(" ")[1];
  
      this.processOperation(operation);
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

   });


});

