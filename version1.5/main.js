
class view {
    
    constructor()
    {
this.row = document.createElement("div");
this.row.classList.add("calculatorRow");

this.row1 = document.createElement("div");
  this.row1.classList.add("calculatoRow");

  this.row2 = document.createElement("div");
  this.row2.classList.add("calculatorRow");

  this.row3 = document.createElement("div");
  this.row3.classList.add("calculatorRow");

  this.row4 = document.createElement("div");
  this.row4.classList.add("calculatorRow");


this.display = document.createElement("input");
this.display.id = "display";
this.display.type = "text";
this.display.value = "";
this.display.classList.add("displayResult");
//buttons
this.button0 = document.createElement("button");
this.button0.innerText = '0';
this.button0.classList.add('buttonNumerico');

this.button1 = document.createElement("button");
this.button1.innerText = '1';
this.button1.classList.add('buttonNumerico');

this.button2 = document.createElement("button");
this.button2.innerText = '2';
this.button2.classList.add('buttonNumerico');

this.button3 = document.createElement("button");
this.button3.innerText = '3';
this.button3.classList.add('buttonNumerico');

this.button4 = document.createElement("button");
this.button4.innerText = '4';
this.button4.classList.add('buttonNumerico');

this.button5 = document.createElement("button");
this.button5.innerText = '5';
this.button5.classList.add('buttonNumerico');

this.button6 = document.createElement("button");
this.button6.innerText = '6';
this.button6.classList.add('buttonNumerico');

this.button7 = document.createElement("button");
this.button7.innerText = '7';
this.button7.classList.add('buttonNumerico');

this.button8 = document.createElement("button");
this.button8.innerText = '8';
this.button8.classList.add('buttonNumerico');

this.button9 = document.createElement("button");
this.button9.innerText = '9';
this.button9.classList.add('buttonNumerico');

this.buttonParentesisAbrir = document.createElement("button");
this.buttonParentesisAbrir.innerText = '(';
this.buttonParentesisAbrir.classList.add('buttonEspecial');

this.buttonParentesisCerrar = document.createElement("button");
this.buttonParentesisCerrar.innerText = ')';
this.buttonParentesisCerrar.classList.add('buttonEspecial');

this.buttonLlaveAbrir = document.createElement("button");
this.buttonLlaveAbrir.innerText = '{';
this.buttonLlaveAbrir.classList.add('buttonEspecial');

this.buttonLlaveCerrar = document.createElement("button");
this.buttonLlaveCerrar.innerText = '}';
this.buttonLlaveCerrar.classList.add('buttonEspecial');


this.buttonCoseno= document.createElement("button");
this.buttonCoseno.innerText = 'cos';
this.buttonCoseno.classList.add('buttonCientifico');

this.buttonTangente= document.createElement("button");
this.buttonTangente.innerText = 'tan';
this.buttonTangente.classList.add('buttonCientifico');

this.buttonPorcentaje= document.createElement("button");
this.buttonPorcentaje.innerText = '%';
this.buttonPorcentaje.classList.add('buttonOperaciones');


this.buttonSeno= document.createElement("button");
this.buttonSeno.innerText = 'sen';
this.buttonSeno.classList.add('buttonCientifico');

this.buttonRaiz= document.createElement("button");
this.buttonRaiz.innerText = 'raiz';
this.buttonRaiz.classList.add('buttonCientifico');

this.buttonPotencia= document.createElement("button");
this.buttonPotencia.innerText = 'Potencia';
this.buttonPotencia.classList.add('buttonCientifico');

this.buttonRaiz= document.createElement("button");
this.buttonRaiz.innerText = 'Raiz';
this.buttonRaiz.classList.add('buttonCientifico');

this.buttonBorrarNumero = document.createElement("button");
this.buttonBorrarNumero.innerText = 'Delete';
this.buttonBorrarNumero.classList.add('buttonCientifico');

this.buttonRestar = document.createElement("button");
this.buttonRestar.innerText = '-';
this.buttonRestar.classList.add('buttonOperaciones');

this.buttonMult = document.createElement("button");
this.buttonMult.innerText = '*';
this.buttonMult.classList.add('buttonOperaciones');

this.buttonDiv = document.createElement("button");
this.buttonDiv.innerText = '/';
this.buttonDiv.classList.add('buttonOperaciones');



this.buttonBorrar = document.createElement("button");
this.buttonBorrar.innerText = 'C';
this.buttonBorrar.classList.add('buttonBorrar');

this.buttonSumar = document.createElement("button");
this.buttonSumar.innerText = '+';
this.buttonSumar.classList.add('buttonOperaciones');

this.buttonIgual = document.createElement("button");
this.buttonIgual.innerText = '=';
this.buttonIgual.classList.add('buttonIgual');
this.buttonPunto = document.createElement("button");
this.buttonPunto.innerText = '.';
this.buttonPunto.classList.add('buttonNumerico');


this.container = document.createElement("div");
this.container.appendChild(this.display);

this.container.appendChild(this.row);
this.container.appendChild(this.button9);
this.container.appendChild(this.button8);
this.container.appendChild(this.button7);
this.container.appendChild(this.button6);
this.container.appendChild(this.buttonCoseno);
this.container.appendChild(this.buttonParentesisAbrir);
this.container.appendChild(this.buttonParentesisCerrar);

this.container.appendChild(this.row1);
this.container.appendChild(this.button5);
this.container.appendChild(this.button4);
this.container.appendChild(this.button3);
this.container.appendChild(this.button2);
this.container.appendChild(this.buttonSeno);
this.container.appendChild(this.buttonLlaveAbrir);
this.container.appendChild(this.buttonLlaveCerrar);

this.container.appendChild(this.row2);
this.container.appendChild(this.button1);
this.container.appendChild(this.button0);
this.container.appendChild(this.buttonPunto);
this.container.appendChild(this.buttonDiv);
this.container.appendChild(this.buttonTangente);
this.container.appendChild(this.buttonRaiz);

this.container.appendChild(this.row3);
this.container.appendChild(this.buttonRestar);
this.container.appendChild(this.buttonMult);
this.container.appendChild(this.buttonPorcentaje);
this.container.appendChild(this.buttonSumar);

this.container.appendChild(this.buttonPotencia);
this.container.appendChild(this.buttonBorrarNumero);
this.container.appendChild(this.row4);
this.container.appendChild(this.buttonBorrar);
this.container.appendChild(this.buttonIgual);
    }
}


let calculatorView = new view();
//document.body.appendChild(calculatorView.container);

class controler {

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
            onButtonBorrarNumeroClick() {
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

        class model
        {
            constructor(){
    
            }
            evaluateExpression(expr)
            {
                return eval (expr);
            }
            
        }
   
    //-------------------MAIN
    class calculator 
    {
        constructor()
        {
        this.View = new  view();
        this.Model = new  model();
        this.Controller = new  controler(this.View, this.Model);
        }
    
    }
    function startApplication()
    {
        let myCalculator = new calculator();
    
        document.body.appendChild(myCalculator.View.container);
    
        //document.body.appendChild(table);
    }
    
    
    window.addEventListener("load", startApplication );