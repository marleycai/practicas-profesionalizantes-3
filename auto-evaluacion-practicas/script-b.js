class ButtonStateModel {
  constructor(incrementValue) {
    this.value = 0;
    this.incrementValue = incrementValue;
  }

  increment() {
    if (this.value < 255) {
      this.value = this.value + this.incrementValue;
    }
  }

  read() {
    return this.value;
  }

  getColor() {
    const shade = Math.floor((255 - this.value) * (255 / 255));
    return `rgb(${shade}, 0, 0)`;
  }
}

class ButtonStateController {
  constructor(model, view) {
    this.innerModel = model;
    this.innerView = view;
  }

  init() {
    this.innerView.setValue(this.innerModel.read());
    this.innerView.setColor(this.innerModel.getColor());
  }

  onclick() {
    this.innerModel.increment();
    this.innerView.setValue(this.innerModel.read());
    this.innerView.setColor(this.innerModel.getColor());
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

  setColor(color) {
    this.customButton.style.backgroundColor = color;
  }
}

customElements.define('x-button', ButtonStateView);

function main() {
  const model = new ButtonStateModel(2);
  const view = new ButtonStateView();
  const controller = new ButtonStateController(model, view);

  view.innerModel = model;
  view.innerController = controller;

  document.body.appendChild(view);
}

main();
