export default class Element {
  constructor(element, classes = "", id = "") {
    this.element = document.createElement(element);

    if (classes) {
      this.element.className = classes;
    }

    if (id) {
      this.element.setAttribute("id", id);
    }
  }

  setId(id) {
    this.element.setAttribute("id", id);
  }

  setClasses(classes) {
    this.element.className = classes;
  }

  addClasses(className) {
    this.element.classList.add(className);
  }

  removeClass(className) {
    this.element.classList.remove(className);
  }

  appendChildElement(child) {
    this.element.appendChild(child.element);
  }
}
