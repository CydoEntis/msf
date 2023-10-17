import Element from "./Element.js";

export default class FormButton extends Element {
  constructor(text) {
    super("button", "btn btn-primary text-white mx-1");
    this.element.textContent = text;
  }
}
