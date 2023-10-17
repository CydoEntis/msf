import Element from "./Element.js";

export default class FormError extends Element {
  constructor() {
    super("p", "small text-danger p-0 m-0 mt-1");
    this.errorMessage = "";
  }

  setErrorMessage(errorMessage) {
    this.errorMessage = errorMessage;
    this.element.textContent = this.errorMessage;
  }
}
