import Element from "./Element.js";

export default class MultiStepForm extends Element {
  constructor(parentEl, classes, id) {
    super("form", "py-3", id);
    this.init();
    parentEl.appendChild(this.element);

  }

  init() {
    this.element.style.maxWidth = "600px";
    this.element.style.minHeight = "400px";
  }
}
