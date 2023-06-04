class calculatorControler {

 constructor( viewReference,modelReference)
{
 this.innerView = viewReference;
 this.innerModel =modelReference;
 
 this.innerView.button0.addEventListener("click",()=>{this.onButton0Click() } );
 this.innerView.button1.addEventListener("click",()=>{this.onButton1Click() } );
 this.innerView.button2.addEventListener("click",()=>{this.onButton2Click() } );
 this.innerView.button3.addEventListener("click",()=>{this.onButton3Click() } );
 this.innerView.button4.addEventListener("click",()=>{this.onButton4Click() } );
 this.innerView.button5.addEventListener("click",()=>{this.onButton5Click() } );
 this.innerView.button6.addEventListener("click",()=>{this.onButton6Click() } );
 this.innerView.button7.addEventListener("click",()=>{this.onButton7Click() } );
 this.innerView.button8.addEventListener("click",()=>{this.onButton8Click() } );
 this.innerView.button9.addEventListener("click",()=>{this.onButton9Click() } );

 this.innerView.buttonParentesisAbrir.addEventListener("click", () => { this.onButtonParentesisAbrirClick() });
 this.innerView.buttonParentesisCerrar.addEventListener("click", () => { this.onButtonParentesisCerrarClick() });
 this.innerView.buttonLlaveAbrir.addEventListener("click", () => { this.onButtonLlaveAbrirClick() });
 this.innerView.buttonLlaveCerrar.addEventListener("click", () => { this.onButtonLlaveCerrarClick() });
 this.innerView.buttonRaiz.addEventListener("click", () => { this.onButtonRaizClick() });
 this.innerView.buttonPotencia.addEventListener("click", () => { this.onButtonPotenciaClick() });
 this.innerView.buttonSeno.addEventListener("click", () => { this.onButtonSenoClick() });
 this.innerView.buttonCoseno.addEventListener("click", () => { this.onButtonCosenoClick() });
 this.innerView.buttonTangente.addEventListener("click", () => { this.onButtonTangenteClick() });
 this.innerView.buttonPorcentaje.addEventListener("click", () => { this.onButtonPorcentajeClick() });
 this.innerView.buttonRestar.addEventListener("click",()=>{this.onButtonRestarClick() } );
 this.innerView.buttonMult.addEventListener("click",()=>{this.onButtonMultClick() } );
 this.innerView.buttonDiv.addEventListener("click",()=>{this.onButtonDivClick() } );
 this.innerView.buttonBorrarNumero.addEventListener("click",()=>{this.onButtonBorrarNumeroClick() } );
 this.innerView.buttonPunto.addEventListener("click",()=>{this.onButtonPuntoClick() } );
 this.innerView.buttonBorrar.addEventListener("click",()=>{this.onButtonBorrarClick() } );
 this.innerView.buttonSumar.addEventListener("click",()=>{this.onButtonSumarClick() } );
 this.innerView.buttonIgual.addEventListener("click",()=>{this.onButtonIgualClick() } );
}

onButton0Click()

{
 this.innerView.display.value += "0"; //operador para concatenar texto 
}

onButton1Click()
{
  this.innerView.display.value += "1"; //operador para concatenar texto 

}

onButton2Click()
{
  this.innerView.display.value += "2"; //operador para concatenar texto 

}
onButton3Click()
{
  this.innerView.display.value += "3"; //operador para concatenar texto 

}
onButton4Click()
{
  this.innerView.display.value += "4"; //operador para concatenar texto 

}
onButton5Click()
{
  this.innerView.display.value += "5"; //operador para concatenar texto 

}
onButton6Click()
{
  this.innerView.display.value += "6"; //operador para concatenar texto 

}
onButton7Click()
{
  this.innerView.display.value += "7"; //operador para concatenar texto 

}
onButton8Click()
{
  this.innerView.display.value += "8"; //operador para concatenar texto 

}
onButton9Click()
{
  this.innerView.display.value += "9"; //operador para concatenar texto 

}
onButtonParentesisAbrirClick()
{
  this.innerView.display.value += "(";
}
onButtonParentesisCerrarClick()
{
  this.innerView.display.value += ")";
}  
onButtonLlaveAbrirClick() {
  this.innerView.display.value += "{";
}

onButtonLlaveCerrarClick() {
  this.innerView.display.value += "}";
}
onButtonRaizClick() {
  const expression = this.innerView.display.value;
  const indice = parseFloat(prompt("Ingrese el índice de la raíz:"));

  if (isNaN(indice) || indice <= 0) {
 alert("Índice de raíz inválido. Ingrese un valor mayor a 0.");
 return;
  }
}
onButtonPotenciaClick() {
  const expression = this.innerView.display.value;
  const exponente = parseFloat(prompt("Ingrese el exponente de la potencia:"));

  if (isNaN(exponente)) {
 alert("Exponente inválido. Ingrese un valor numérico.");
 return;
  }

  const result = Math.pow(eval(expression), exponente);
  this.innerView.display.value = result;
}

onButtonSenoClick() {
  const currentValue = parseFloat(this.innerView.display.value);
  this.innerView.display.value = Math.sin(currentValue);
}

onButtonCosenoClick() {
  const currentValue = parseFloat(this.innerView.display.value);
  this.innerView.display.value = Math.cos(currentValue);
}

onButtonTangenteClick() {
  const currentValue = parseFloat(this.innerView.display.value);
  this.innerView.display.value = Math.tan(currentValue);
}
onButtonPorcentajeClick() 
{
  const expression = this.innerView.display.value;
  const percent = parseFloat(prompt("Ingrese el porcentaje (0-1000):"));

  if (isNaN(percent) || percent < 0 || percent > 1000) {
 alert("Porcentaje inválido. Ingrese un valor entre 0 y 1000.");
 return;
  }

  const result = eval(expression) * (percent / 100);
  this.innerView.display.value = result;

}
onButtonSumarClick()
{
  this.innerView.display.value += "+"; //operador para concatenar texto 

}
onButtonRestarClick()
{
  this.innerView.display.value += "-"; //operador para concatenar texto 

}
onButtonDivClick()
{
  this.innerView.display.value += "/"; //operador para concatenar texto 

}
onButtonPuntoClick()
{
  this.innerView.display.value += "."; //operador para concatenar texto 

}
onButtonBorrarNumeroClick() 
{
  let currentValue = this.innerView.display.value;
  this.innerView.display.value = currentValue.slice(0, -1);
}
onButtonMultClick()
{
  this.innerView.display.value += "*"; //operador para concatenar texto 

}
onButtonBorrarClick() 
{
  this.innerView.display.value = "";
}
onButtonIgualClick() 
{
  this.innerView.display.value = this.innerModel.evaluateExpression(this.innerView.display.value);
}

}

 export { calculatorControler };