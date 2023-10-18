import Element from "../element/Element.js";

export default class FormInput extends Element {
  constructor() {
    super("input", "form-control");
  }

  setType(type) {
    this.element.type = type;
  }

  setName(name) {
    this.element.name = name;
  }

  setId(id) {
    this.element.setAttribute("id", id);
  } 

  getInputElement() {
    return this.element;
  }

  getName() {
    return this.element.name;
  }
}
