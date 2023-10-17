import Element from "./Element.js";

export default class FormInput extends Element {
  constructor(name, type) {
    super("input", "form-control");
    this.element.name = name;
    this.element.type = type;
  }
}
