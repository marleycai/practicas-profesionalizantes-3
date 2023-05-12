   // Creación de la tabla
const table = document.createElement("table");

// Creación de la fila
const row = document.createElement("tr");

// Creación del input
const input = document.createElement("input");
input.id = "display";
input.type = "text";
input.value = "";
row.appendChild(input);

// Creación de la celda de colspan
const colspanCell = document.createElement("td");
colspanCell.colSpan = 4;
row.appendChild(colspanCell);

// Agregar la fila a la tabla
table.appendChild(row);

// Agregar la tabla al documento
document.body.appendChild(table);
function onbtn1buttononclick(event)
    {
        alert("boton apretado")
    }

 

function strarApplication()
{
       
    let button0 = document.createElement("button");
        button0.innerText = "0";
            button0.classList.add("buttonNumerico");
             button0.addEventListener("click",onbtn1buttononclick);
                     button0.addEventListener('click', action => display.value = display.value + '0');

    let button1 = document.createElement("button");
     button1.innerText = "1";
         button1.classList.add("buttonNumerico");
             button1.addEventListener("click",onbtn1buttononclick);
              document.body.appendChild(button1);
                 button1.addEventListener('click', action => display.value = display.value + '1');

    let button2 = document.createElement("button");
     button2.innerText = "2";
         button2.classList.add("buttonNumerico");
             button2.addEventListener("click",onbtn1buttononclick);
                document.body.appendChild(button2);
                     button2.addEventListener('click', action => display.value = display.value + '2');

    let button3 = document.createElement("button");
     button3.innerText = "3";
        button3.classList.add("buttonNumerico");
             button3.addEventListener("click",onbtn1buttononclick);
               document.body.appendChild(button3);
                  button3.addEventListener('click', action => display.value = display.value + '3');
                 
                 

    let buttonSumar = document.createElement("button");
     buttonSumar.innerText = "+";
      buttonSumar.classList.add("buttonNumerico");
          buttonSumar.addEventListener("click",onbtn1buttononclick);
             document.body.appendChild(buttonSumar);
                 buttonSumar.addEventListener('click', action => display.value = display.value+'+');


    let button4 = document.createElement("button");
     button4.innerText = "4";
          button4.classList.add("buttonNumerico");
             button4.addEventListener("click",onbtn1buttononclick);
                 document.body.appendChild(button4);
                     button4.addEventListener('click', action => display.value = display.value + '4');
    
    let button5 = document.createElement("button");
    button5.innerText = "5";
         button5.classList.add("buttonNumerico");
              button5.addEventListener("click",onbtn1buttononclick);
                 document.body.appendChild(button5);
                      button5.addEventListener('click', action => display.value = display.value + '5');


    let button6 = document.createElement("button");
     button6.innerText = "6";
         button6.classList.add("buttonNumerico");
            button6.addEventListener("click",onbtn1buttononclick);
                document.body.appendChild(button6);
                     button6.addEventListener('click', action => display.value = display.value + '6');
    
    let buttonRestar = document.createElement("button");
    buttonRestar.innerText = "-";
        buttonRestar.classList.add("buttonNumerico");
            buttonRestar.addEventListener("click",onbtn1buttononclick);
                document.body.appendChild(buttonRestar);
                    buttonRestar.addEventListener('click', action => display.value = display.value+'-');

    let button7 = document.createElement("button");
        button7.innerText = "7";
            button7.classList.add("buttonNumerico");
                 button7.addEventListener("click",onbtn1buttononclick);
                     document.body.appendChild(button7);
                        button7.addEventListener('click', action => display.value = display.value + '7');

    let button8 = document.createElement("button");
     button8.innerText = "8";
         button8.classList.add("buttonNumerico");
             button8.addEventListener("click",onbtn1buttononclick);
                 document.body.appendChild(button8);
                      button8.addEventListener('click', action => display.value = display.value + '8');

    let button9 = document.createElement("button");
    button9.innerText = "9";
        button9.classList.add("buttonNumerico");
            button9.addEventListener("click",onbtn1buttononclick);
                 document.body.appendChild(button9);
                      button9.addEventListener('click', action => display.value = display.value + '9');

    let buttonMult = document.createElement("button");
     buttonMult.innerText = "*";
         buttonMult.classList.add("buttonNumerico");
             buttonMult.addEventListener("click",onbtn1buttononclick);
                 document.body.appendChild(buttonMult);
                     buttonMult.addEventListener('click', action => display.value = display.value+'*');

    let buttonPunto = document.createElement("button");
     buttonPunto.innerText = ".";
         buttonPunto.classList.add("buttonNumerico");
            buttonPunto.addEventListener("click",onbtn1buttononclick);
                 document.body.appendChild(buttonPunto);
                      buttonPunto.addEventListener('click', action => display.value = display.value + '.');

    let buttonIgual = document.createElement("button");
     buttonIgual.innerText = "=";
         buttonIgual.classList.add("buttonNumerico");
             buttonIgual.addEventListener("click",onbtn1buttononclick);
                 document.body.appendChild(buttonIgual);
                    buttonIgual.addEventListener( 'click', action => display.value = eval( display.value ) );

    let buttonDiv = document.createElement("button");
     buttonDiv.innerText = "/";
         buttonDiv.classList.add("buttonNumerico");
             buttonDiv.addEventListener("click",onbtn1buttononclick);
                 document.body.appendChild(buttonDiv);
                    buttonDiv.addEventListener('click', action => display.value = display.value+'/');

    let buttonBorrar = document.createElement("button");
      buttonBorrar.innerText = "C";
         buttonBorrar.classList.add("buttonNumerico");
              buttonBorrar.addEventListener("click",onbtn1buttononclick);
                  document.body.appendChild(buttonBorrar);
                      buttonBorrar.addEventListener( 'click', action => display.value = '' );

    
}
window.addEventListener("load", strarApplication );