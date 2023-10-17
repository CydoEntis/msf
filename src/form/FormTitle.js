import Element from "../element/Element.js";

export default class FormTitle extends Element {
  constructor(title) {
    super("h2", "text-center text-uppercase form-title font-weight-bold");
    this.element.textContent = title;
  }
}
