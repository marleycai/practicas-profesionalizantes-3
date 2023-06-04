import { calculatorView }from "./calculator/view.js";
import { calculatorControler } from "./calculator/controler.js";
import { calculatorModel } from "./calculator/model.js";

    class calculator 
    {
        constructor()
        {
        this.innerView = new  calculatorView();
        this.innerModel = new  calculatorModel();
        this.innerControler = new  calculatorControler(this.innerView, this.innerModel);
        }
    
    }
    function main()
    {
        alert ("star aplication 2.0 Facudo Caminos ..");
        let myCalculator = new calculator();
    
        document.body.appendChild(myCalculator.innerView.container);
    
        //document.body.appendChild(table);
    }
    window.addEventListener("load", main );
  