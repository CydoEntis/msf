import ButtonGroup from "./ButtonGroup.js";
import Element from "../element/Element.js";
import FormGroup from "./FormGroup.js";
import FormHeading from "./FormHeading.js";

export default class FormStep extends Element {
  constructor(id) {
    super("div", `py-3 px-2 w-full step step-${id}`);
    this.stepHeading;
    this.formGroups = [];
    this.buttonGroup;
  }

  setHeading(heading) {
    const stepHeading = new FormHeading(heading);
    this.appendChildElement(stepHeading);
    this.stepHeading = stepHeading
  }

  createFormGroup(group) {
    const formGroup = new FormGroup();
    formGroup.createFormLabel(group.htmlFor, group.labelText);
    formGroup.createFormInput(group.variant, group.type, group.id, group.name, group.options);
    formGroup.createFormErrors();

    this.appendChildElement(formGroup);
    this.formGroups.push(formGroup);
  }

  createButtonGroup(currentStep, totalSteps) {
    const buttonGroup = new ButtonGroup(currentStep, totalSteps);
    this.appendChildElement(buttonGroup);
    this.buttonGroup = buttonGroup;
  }

  getFormGroups() {
    return this.formGroups;
  }
}
