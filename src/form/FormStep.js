import ButtonGroup from "./ButtonGroup.js";
import Element from "../element/Element.js";
import FormGroup from "./FormGroup.js";
import FormHeading from "./FormHeading.js";

export default class FormStep extends Element {
  constructor(stepNumber, headingText, data, totalSteps) {
    super("div", `py-3 px-2 w-full step step-${stepNumber}`);
    this.data = data;
    this.heading = new FormHeading(headingText);
    this.formGroups = this.createFormGroups();
    this.buttonGroup = new ButtonGroup(stepNumber, totalSteps);

    this.appendChildElements([
      this.heading,
      ...this.formGroups,
      this.buttonGroup,
    ]);
  }

  createFormGroups() {
    return this.data.map((group) => {
      const formGroup = new FormGroup(
        group.name,
        group.labelText,
        group.variant,
        group.type
      );
      return formGroup;
    });
  }

  getFormGroups() {
    return this.formGroups;
  }
}
