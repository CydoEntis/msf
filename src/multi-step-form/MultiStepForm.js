import { validate } from "validate.js";
import Element from "../element/Element.js";
import FormStep from "../form/FormStep.js";
import FormTitle from "../form/FormTitle.js";
import Progressbar from "../progress-bar/Progressbar.js";
import { constraints } from "../constraints.js";

export default class MultiStepForm extends Element {
  constructor(parentEl, title, stepsData, classes, id) {
    super("form", "py-3 px-2", id);
    parentEl.appendChild(this.element);
    this.title = new FormTitle(title);
    this.progressbar = new Progressbar();
    this.stepsData = stepsData;
    this.steps = [];
    this.listOfSteps = [];
    this.currentStep = 0;
    this.init();
  }

  init() {
    this.setupFormStyles();
    this.appendChildElement(this.title);
    this.appendChildElement(this.progressbar);
    this.addSteps(this.stepsData);
    this.displayCurrentStep();
    this.setupEventListeners();
  }

  setupFormStyles() {
    this.element.style.maxWidth = "600px";
    this.element.style.minHeight = "400px";
    // this.element.classList.add("border", "border-warning");
  }

  addSteps(steps) {
    for (const step of steps) {
      const newStep = new FormStep(
        step.id,
        step.heading,
        step.groups,
        steps.length
      );
      this.steps.push(newStep);
      this.appendChildElement(newStep);
    }
  }

  setupEventListeners() {
    this.element.addEventListener("click", (e) => this.navigationHandler(e));
  }

  navigationHandler(e) {
    if (e.target.matches("[data-next]")) {
      this.moveToNextStep();
    } else if (e.target.matches("[data-previous]")) {
      this.moveToPrevStep();
    }
  }

  displayCurrentStep() {
    const steps = this.element.querySelectorAll(".step");
    this.listOfSteps = Array.from(steps);
    steps.forEach((step, index) => {
      step.classList.toggle("active-step", index === this.currentStep);
    });
  }

  getCurrFormStepGroups() {
    return this.steps[this.currentStep].getFormGroups();
  }

  displayFormErrors(errors) {
    const formGroups = this.getCurrFormStepGroups();

    for (const group of formGroups) {
      const inputName = group.getInput().getName();
      const errorsElement = group.getErrors();

      const currentErrors = errorsElement.getAllErrors();

      if (errors[inputName]) {
        for (const error of errors[inputName]) {
          if (!currentErrors.includes(error)) {
            errorsElement.addError(error);
          }
        }
      } else {
        errorsElement.clearErrors();
      }
    }
  }

  moveToNextStep() {
    const currentStep = this.element.querySelector(`.step-${this.currentStep}`);
    const formElements = currentStep.querySelectorAll("input, select");

    const formData = Array.from(formElements).reduce((data, element) => {
      data[element.name] = element.value;
      return data;
    }, {});

    const errors = validate(formData, constraints);

    if (errors) {
      this.displayFormErrors(errors);
      return;
    }

    if (this.currentStep < this.listOfSteps.length - 1) {
      this.currentStep++;
      this.displayCurrentStep();
      this.progressbar.setProgressWidth(this.currentStep, this.steps.length);
    } else {
      // Todo: Submit the Form
    }
  }

  moveToPrevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.displayCurrentStep();
      this.progressbar.setProgressWidth(this.currentStep, this.steps.length);
    }
  }
}
