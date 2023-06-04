class calculatorView 
{
    
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
this.buttonPunto = document.createElement("button");
this.buttonPunto.innerText = '.';
this.buttonPunto.classList.add('buttonNumerico');

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

let calculatorcalculatorView = new calculatorView();
//document.body.appendChild(calculatorcalculatorView.container);
export { calculatorView };