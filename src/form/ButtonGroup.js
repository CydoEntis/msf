import Element from "../element/Element.js";
import FormButton from "./FormButton.js";

export default class ButtonGroup extends Element {
  constructor(stepNumber, totalSteps) {
    super("div", "px-4 d-flex justify-content-end");
    const buttons = this.createButtons(stepNumber, totalSteps);
    this.appendChildElements(buttons);
  }

  createButtons(stepNumber, totalSteps) {
    if (stepNumber === 0) {
      return [new FormButton("Next")];
    } else if (stepNumber <= totalSteps) {
      return [new FormButton("Previous"), new FormButton("Next")];
    } else {
      return [new FormButton("Previous"), new FormButton("Finish", "submit")];
    }
  }
}
