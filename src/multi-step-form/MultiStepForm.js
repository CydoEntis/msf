import { validate } from "validate.js";
import Element from "../element/Element.js";
import FormStep from "../form/FormStep.js";
import FormTitle from "../form/FormTitle.js";
import Progressbar from "../progress-bar/Progressbar.js";
import { constraints } from "../constraints.js";
import ButtonGroup from "../form/ButtonGroup.js";
import FormGroup from "../form/FormGroup.js";

export default class MultiStepForm extends Element {
  constructor(id) {
    super("form", "py-3 px-2", id);
    this.steps = [];
    this.currentStep = 0;
    this.init();
  }

  bindToParent(parentElement) {
    parentElement.appendChild(this.element);
  }

  setFormTitle(title) {
    this.title = new FormTitle(title);
    this.appendChildElement(this.title);
  }

  addProgressBar() {
    this.progressbar = new Progressbar();
    this.appendChildElement(this.progressbar);
  }

  createFormSteps(steps) {
    for (const step of steps) {
      const newStep = new FormStep(step.id);
      newStep.setHeading(step.heading);

      for(const group of step.groups) {
        newStep.createFormGroup(group);
      }

      newStep.createButtonGroup(this.currentStep, steps.length);

      this.appendChildElement(newStep);
      this.steps.push(newStep);
    }
    this.displayCurrentStep();
  }

  init() {
    this.setupFormStyles();
    this.displayCurrentStep();
    this.setupEventListeners();
  }

  setupFormStyles() {
    this.element.style.maxWidth = "600px";
    this.element.style.minHeight = "400px";
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

    steps.forEach((step, index) => {
      step.classList.toggle("active-step", index === this.currentStep);
    });
  }

  // getCurrFormStepGroups() {
  //   return this.steps[this.currentStep].getFormGroups();
  // }

  displayFormErrors(errors) {
    const formGroups = this.steps[this.currentStep].formGroups;

    for (const group of formGroups) {
      console.log(group)
      // const errorsElement = group.getErrors();

      // const currentErrors = errorsElement.getAllErrors();

      // if (errors[inputName]) {
      //   for (const error of errors[inputName]) {
      //     if (!currentErrors.includes(error)) {
      //       errorsElement.addError(error);
      //     }
      //   }
      // } else {
      //   errorsElement.clearErrors();
      // }
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
    
    if (this.currentStep < this.steps.length - 1) {
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
