import Element from "../element/Element.js";

export default class FormHeading extends Element {
  constructor(text) {
    super("h3", "text-center step-heading");
    this.element.textContent = text;
  }
}
