import Element from "../element/Element.js";
import ProgressbarFill from "./ProgressbarFill.js";

export default class Progressbar extends Element {
  constructor() {
    super("div", "px-4");
    this.progressbarFill = new ProgressbarFill();
    this.appendChildElement(this.progressbarFill);
  }

  setProgressWidth(currentStep, totalSteps) {
    this.progressbarFill.setWidth(currentStep, totalSteps);
  }
}
