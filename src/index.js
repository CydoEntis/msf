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
        name: "firstName",
        labelText: "First Name",
        variant: "input",
        type: "text",
      },
      {
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
        name: "address",
        labelText: "Address",
        variant: "input",
        type: "text",
      },
      {
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
        name: "make",
        labelText: "Make",
        variant: "select",
        type: "select",
        options: [],
      },
      {
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
        name: "vin",
        labelText: "Vin",
        variant: "input",
        type: "text",
      },
    ],
  },
];

const msf = new MultiStepForm(
  rootContainer,
  "personalized rates",
  steps,
  "",
  "multi-step-form"
);
