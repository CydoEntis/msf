import Element from "../element/Element.js";
import FormErrors from "./FormErrors.js";
import FormInput from "./FormInput.js";
import FormLabel from "./FormLabel.js";
import FormSelect from "./FormSelect.js";

export default class FormGroup extends Element {
  constructor() {
    super("div", "form-group px-4");
    this.formLabel;
    this.formInput;
    this.formSelect;
    this.formErrors;
  }

  createFormLabel(htmlFor, labelText) {
    const label = new FormLabel(htmlFor, labelText);
    label.setHtmlFor(htmlFor);
    label.setLabelText(labelText);
    this.appendChildElement(label);
    this.formLabel = label;
  }

  createFormInput(variant, type, id, name, options) {
    if (variant === "input") {
      const formInput = new FormInput();
      formInput.setType(type);
      formInput.setId(id);
      formInput.setName(name);

      this.appendChildElement(formInput);
      this.formInput = formInput;
    } else if (variant === "select") {
      const formSelect = new FormSelect();
      formSelect.addOptions(options);
      this.appendChildElement(formSelect);
      this.formSelect = formSelect;
    }
  }

  createFormErrors() {
    const errors = new FormErrors();
    this.appendChildElement(errors);
    this.formErrors = errors;
  }


  // Don't think I need this anymore??
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
