import Element from "../element/Element.js";

export default class FormLabel extends Element {
  constructor() {
    super("label");
  }

  setHtmlFor(htmlFor) {
    this.element.htmlFor = htmlFor;
  }

  setLabelText(labelText) {
    this.element.textContent = labelText;
  }
}
