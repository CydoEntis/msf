import Element from "../element/Element.js";

export default class ProgressbarFill extends Element {
  constructor() {
    super("div", "progress");
    this.progressbarFill = document.createElement("div");
    this.progressbarFill.classList = "progress-bar";
    this.progressbarFill.style.width = "0%";
    this.element.style.height = "8px";

    this.element.appendChild(this.progressbarFill);
  }

  setWidth(currentStep, totalSteps) {
    const ADD_WIDTH = 100 / totalSteps;

    let progressWidth = (currentStep + 1) * ADD_WIDTH;

    if (progressWidth >= 100) {
      progressWidth = 100;
    }

    this.progressbarFill.style.width = `${progressWidth}%`;
  }
}
