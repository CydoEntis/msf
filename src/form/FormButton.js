import Element from "../element/Element.js";

export default class FormButton extends Element {
  constructor(text, type = "button") {
    super("button", "btn btn-primary text-white mx-1");
    this.setText(text);
    this.setType(type);
    this.setButtonDataAttribute(text);
  }

  setText(text) {
    this.element.textContent = text;
  }

  setType(type) {
    this.element.type = type;
  }

  setButtonDataAttribute(text) {
    if (text === "Next" || text === "Previous" || text === "Finish") {
      this.element.setAttribute(`data-${text.toLowerCase()}`, "");
    }
  }
}
