import Element from "../element/Element.js";
import FormOption from "./FormOption.js";

export default class FormSelect extends Element {
  constructor() {
    super("select", "custom-select");
  }

  addOption(option) {
    this.appendChildElement(new FormOption(option, option));
  }

  addOptions(options) {
    for (let option of options) {
      this.addOption(option);
    }
  }
}
