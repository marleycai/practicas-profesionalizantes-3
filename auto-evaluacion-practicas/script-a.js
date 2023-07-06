//agregamos el incremento del boton hasta 255.
//el incremento del boton es de 2 en 2
class ButtonStateModel {
    constructor(incrementValue) {
      this.value = 0;
      this.incrementValue = incrementValue;
    }
  
    increment() {
      if (this.value < 255) {   // <255
        this.value = this.value + this.incrementValue;
      }
    }
  
    read() {
      return this.value;
    }
  }
  
  class ButtonStateController {
    constructor(model, view) {
      this.innerModel = model;
      this.innerView = view;
    }
  
    init() {
      this.innerView.setValue(this.innerModel.read());
    }
  
    onclick() {
      this.innerModel.increment();
      this.innerView.setValue(this.innerModel.read());
    }
  }
  
  class ButtonStateView extends HTMLElement {
    constructor() {
      super();
  
      this.innerModel = null;
      this.innerController = null;
  
      this.customButton = document.createElement('button');
      this.appendChild(this.customButton);
    }
  
    connectedCallback() {
      this.customButton.onclick = () => this.innerController.onclick();
      this.innerController.init();
    }
  
    setValue(value) {
      this.customButton.innerText = value.toString();
    }
  }
  
  customElements.define('x-button', ButtonStateView);
  
  function main(useAlternateModel) {
    if (useAlternateModel) {
      class AlternateButtonStateModel extends ButtonStateModel {
        constructor() {
          super(2);
        }
  
        increment() {   //incremento 
          if (this.value < 254) {
            this.value = this.value + this.incrementValue;
          } else {
            this.value = 255;
          }
        }
      }
  
      const alternateModel = new AlternateButtonStateModel();
      const alternateView = new ButtonStateView();
  
      alternateView.innerModel = alternateModel;
      alternateView.innerController = new ButtonStateController(alternateModel, alternateView);
  
      document.body.appendChild(alternateView);
    } else {
      const defaultModel = new ButtonStateModel(1);
      const defaultView = new ButtonStateView();
  
      defaultView.innerModel = defaultModel;
      defaultView.innerController = new ButtonStateController(defaultModel, defaultView);
  
      document.body.appendChild(defaultView);
    }
  }
  
  main(true);
  