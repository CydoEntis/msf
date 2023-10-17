import Element from "../element/Element.js";

export default class FormLabel extends Element {
  constructor(isFor, labelText) {
    super("label");
    this.element.htmlFor = isFor;
    this.element.innerText = labelText;
  }
}
