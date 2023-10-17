import Element from "../element/Element.js";

export default class FormInput extends Element {
  constructor(name, type) {
    super("input", "form-control", name);
    this.element.name = name;
    this.element.type = type;
  }

  getInputElement() {
    return this.element;
  }

  getName() {
    return this.element.name;
  }
}
