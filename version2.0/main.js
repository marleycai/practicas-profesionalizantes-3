import model from "./model.js";
import view from "./view.js";
import controler from "./controler.js";
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
    function main()
    {
        alert ("star aplication 2.0 Facudo Caminos ..");
        let myCalculator = new calculator();
    
        document.body.appendChild(myCalculator.View.container);
    
        //document.body.appendChild(table);
    }
    
    
    window.addEventListener("load", main );
  