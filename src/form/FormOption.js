import Element from "../element/Element.js";

export default class FormOption extends Element {
  constructor(value, text = "") {
    super("option");
    this.element.value = value;
    this.element.textContent = text;
  }
}
