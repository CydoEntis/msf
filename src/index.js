import MultiStepForm from "./multi-step-form/MultiStepForm.js";
import { usStates } from "./data.js";

const rootContainer = document.getElementById("widget-root");

/** TODO:
 *  Create a Validation look up table
 *  Holds all Validation rules for various inputs
 *  Can pass the validation rule by input name
 */

/**
 * TODO OR Static method that calls each validation method.
 */

const steps = [
  {
    id: 0,
    heading: "Your Name?",
    groups: [
      {
        id: "firstName",
        htmlFor: "firstName",
        name: "firstName",
        labelText: "First Name",
        variant: "input",
        type: "text",
      },
      {
        id: "lastName",
        htmlFor: "lastName",
        name: "lastName",
        labelText: "Last Name",
        variant: "input",
        type: "text",
      },
    ],
  },
  {
    id: 1,
    heading: "Your Email?",
    groups: [
      {
        id: "email",
        htmlFor: "email",
        name: "email",
        labelText: "Email",
        variant: "input",
        type: "email",
      },
    ],
  },
  {
    id: 2,
    heading: "Best Number To Reach You?",
    groups: [
      {
        id: "phoneNumber",
        htmlFor: "phoneNumber",
        name: "phoneNumber",
        labelText: "Phone Number",
        variant: "input",
        type: "tel",
      },
    ],
  },
  {
    id: 3,
    heading: "When Were You Born?",
    groups: [
      {
        id: "dateOfBirth",
        htmlFor: "dateOfBirth",
        name: "dateOfBirth",
        labelText: "Date of Birth?",
        variant: "input",
        type: "date",
      },
    ],
  },
  {
    id: 4,
    heading: "Whare Are You From?",
    groups: [
      {
        id: "address",
        htmlFor: "address",
        name: "address",
        labelText: "Address",
        variant: "input",
        type: "text",
      },
      {
        id: "city",
        htmlFor: "city",
        name: "city",
        labelText: "City",
        variant: "input",
        type: "text",
      },
    ],
  },
  {
    id: 5,
    heading: "What Is Your Zip Code?",
    groups: [
      {
        id: "zip",
        htmlFor: "zip",
        name: "zip",
        labelText: "Zip Code",
        variant: "input",
        type: "number",
      },
    ],
  },
  {
    id: 6,
    heading: "What State Do You Live In?",
    groups: [
      {
        id: "state",
        htmlFor: "state",
        name: "state",
        labelText: "State",
        variant: "select",
        type: "select",
        options: usStates,
      },
    ],
  },
  {
    id: 7,
    heading: "What Kind Of Vehicle Do You Drive",
    groups: [
      {
        id: "make",
        htmlFor: "make",
        name: "make",
        labelText: "Make",
        variant: "select",
        type: "select",
        options: [],
      },
      {
        id: "model",
        htmlFor: "model",
        name: "model",
        labelText: "Model",
        variant: "select",
        options: [],
      },
    ],
  },
  {
    id: 8,
    heading: "What Year Is Your Vehicle",
    groups: [
      {
        id: "vehicleYear",
        htmlFor: "vehicleYear",
        name: "vehicleYear",
        labelText: "Vehicle Year",
        variant: "input",
        type: "number",
      },
    ],
  },
  {
    id: 9,
    heading: "How Many Miles Does Your Vehicle Have?",
    groups: [
      {
        id: "vehicleMiles",
        htmlFor: "vehicleMiles",
        name: "vehicleMiles",
        labelText: "VehicleMiles",
        variant: "input",
        type: "vehicleMiles",
      },
    ],
  },
  {
    id: 10,
    heading: "What Is Your VIN Number?",
    groups: [
      {
        id: "vin",
        htmlFor: "vin",
        name: "vin",
        labelText: "Vin",
        variant: "input",
        type: "text",
      },
    ],
  },
];

const msf = new MultiStepForm();
msf.bindToParent(rootContainer);
msf.setFormTitle("Personalized Rates");
msf.addProgressBar();
msf.createFormSteps(steps);
