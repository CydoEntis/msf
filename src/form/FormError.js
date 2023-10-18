import Element from "../element/Element.js";

export default class FormError extends Element {
  constructor() {
    super("li", "error text-danger p-0 m-0 mt-1");
  }

  setErrorMessage(errorMessage) {
    this.element.textContent = errorMessage;
  }

  clearErrorMessage() {
    this.element.remove();
  }
}
