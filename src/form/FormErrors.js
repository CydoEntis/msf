import Element from "../element/Element.js";
import FormError from "./FormError.js";

export default class FormErrors extends Element {
  constructor() {
    super("ul", "error text-danger p-0 m-0 mt-1");
    this.errors = new Map();
  }

  getAllErrors() {
    return [...this.errors.keys()];
  }

  addError(errorMessage) {
    if (!this.errors.has(errorMessage)) {
      const error = new FormError(errorMessage);
      this.errors.set(errorMessage, error);
      this.appendChildElement(error);
    }
  }

  clearErrors() {
    for (const [, error] of this.errors) {
      error.element.remove();
    }
    this.errors.clear();
  }
}
