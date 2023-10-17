import Element from "./Element.js";

/**
 * Add a wrapper that hold all the form elements for a given step
 * The wrapper should be able to animate, slide ins an outs.
 */

export default class FormStep extends Element{
  constructor() {
    super("div", "py-2 px-2 w-full border border-warning step");
  }
}
