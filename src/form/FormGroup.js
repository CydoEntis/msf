import Element from "../element/Element.js";
import FormErrors from "./FormErrors.js";
import FormInput from "./FormInput.js";
import FormLabel from "./FormLabel.js";
import FormSelect from "./FormSelect.js";

export default class FormGroup extends Element {
  constructor(name, labelText, variant, type) {
    super("div", "form-group px-4");
    this.label = this.setFormLabel(name, labelText);
    this.input = this.setInput(variant, name, type);
    this.errors = this.setErrors();
  }

  setFormLabel(name, labelText) {
    const label = new FormLabel(name, labelText);
    this.appendChildElement(label);
    return label;
  }

  setInput(variant, name, type) {
    let input;
    if (variant === "input") {
      input = new FormInput(name, type);
      input
        .getInputElement()
        .addEventListener("blur", this.clearError.bind(this));
    } else if (variant === "select") {
      input = new FormSelect();
    }

    this.appendChildElement(input);
    return input;
  }

  getInput() {
    return this.input;
  }

  setErrors() {
    const errors = new FormErrors();
    this.appendChildElement(errors);
    return errors;
  }

  getErrors() {
    return this.errors;
  }

  clearError() {
    this.errors.clearErrors();
  }
}
