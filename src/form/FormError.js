import Element from "../element/Element.js";

export default class FormError extends Element {
  constructor(errorMessage) {
    super("li", "small text-danger p-0 m-0 mt-1");
    this.setErrorMessage(errorMessage);
  }

  setErrorMessage(errorMessage) {
    this.element.textContent = errorMessage;
  }

  clearErrorMessage() {
    this.element.remove();
  }
}
