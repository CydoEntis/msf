import FormGroup from "./FormGroup.js";
import FormInput from "./FormInput.js";
import FormLabel from "./FormLabel.js";
import FormError from "./FormError.js";
import MultiStepForm from "./MultiStepForm.js";
import FormSelect from "./FormSelect.js";
import { usStates } from "./data.js";
import FormStep from "./FormStep.js";
import FormButton from "./FormButton.js";
import ButtonGroup from "./ButtonGroup.js";
const rootContainer = document.getElementById("widget-root");

/** TODO:
 *  Create a Validation look up table
 *  Holds all Validation rules for various inputs
 *  Can pass the validation rule by input name
 */

/**
 * TODO OR Static method that calls each validation method.
 */

const msf = new MultiStepForm(rootContainer, "multi-step-form");

// Name Step
const nameStep = new FormStep();
const fNameGroup = new FormGroup();
const fNameLabel = new FormLabel("fname", "First Name");
const fNameInput = new FormInput("fname", "text");
const fNameError = new FormError();
fNameError.setErrorMessage("Error with first name test.");

fNameGroup.appendChildElement(fNameLabel);
fNameGroup.appendChildElement(fNameInput);
fNameGroup.appendChildElement(fNameError);
nameStep.appendChildElement(fNameGroup);

const lNameGroup = new FormGroup();
const lNameLabel = new FormLabel("lname", "Last Name");
const lNameInput = new FormInput("lname", "text");
const lNameError = new FormError();
lNameError.setErrorMessage("Error with last name test.");

lNameGroup.appendChildElement(lNameLabel);
lNameGroup.appendChildElement(lNameInput);
lNameGroup.appendChildElement(lNameError);
nameStep.appendChildElement(lNameGroup);

const nameButton = new FormButton("Next");
const nameButtonGroup = new ButtonGroup();
nameButtonGroup.appendChildElement(nameButton);

nameStep.appendChildElement(nameButtonGroup);

// Email
const emailStep = new FormStep();
const emailGroup = new FormGroup();
const emailLabel = new FormLabel("email", "Email");
const emailInput = new FormInput("email", "email");
const emailError = new FormError();
emailError.setErrorMessage("Error with email test.");

emailGroup.appendChildElement(emailLabel);
emailGroup.appendChildElement(emailInput);
emailGroup.appendChildElement(emailError);
emailStep.appendChildElement(emailGroup);

const emailButtonNext = new FormButton("Previous");
const emailButtonPrev = new FormButton("Next");
const emailButtonGroup = new ButtonGroup();
emailButtonGroup.appendChildElement(emailButtonNext);
emailButtonGroup.appendChildElement(emailButtonPrev);
emailStep.appendChildElement(emailButtonGroup);




// Phone Number
const phoneNumberStep = new FormStep();
const phoneNumberGroup = new FormGroup();
const phoneNumberLabel = new FormLabel("phoneNumber", "Phone Number");
const phoneNumberInput = new FormInput("phoneNumber", "tel");
const phoneNumberError = new FormError();
phoneNumberError.setErrorMessage("Error with phone number test.");

phoneNumberGroup.appendChildElement(phoneNumberLabel);
phoneNumberGroup.appendChildElement(phoneNumberInput);
phoneNumberGroup.appendChildElement(phoneNumberError);
phoneNumberStep.appendChildElement(phoneNumberGroup);

const phoneNumberButtonNext = new FormButton("Previous");
const phoneNumberButtonPrev = new FormButton("Next");
const phoneNumberButtonGroup = new ButtonGroup();
phoneNumberButtonGroup.appendChildElement(phoneNumberButtonNext);
phoneNumberButtonGroup.appendChildElement(phoneNumberButtonPrev);
phoneNumberStep.appendChildElement(phoneNumberButtonGroup);

// Date Of Birth
const dobStep = new FormStep();
const dobGroup = new FormGroup();
const dobLabel = new FormLabel("dob", "Date of Birth");
const dobInput = new FormInput("dob", "date");
const dobError = new FormError();
dobError.setErrorMessage("Error with date of birth test.");

dobGroup.appendChildElement(dobLabel);
dobGroup.appendChildElement(dobInput);
dobGroup.appendChildElement(dobError);
dobStep.appendChildElement(dobGroup);

const dobButtonNext = new FormButton("Previous");
const dobButtonPrev = new FormButton("Next");
const dobButtonGroup = new ButtonGroup();
dobButtonGroup.appendChildElement(dobButtonNext);
dobButtonGroup.appendChildElement(dobButtonPrev);
dobStep.appendChildElement(dobButtonGroup);

// Address - City
const locationStep = new FormStep();
const addressGroup = new FormGroup();
const addressLabel = new FormLabel("address", "Address");
const addressInput = new FormInput("address", "text");
const addressError = new FormError();
addressError.setErrorMessage("Error with address test.");

addressGroup.appendChildElement(addressLabel);
addressGroup.appendChildElement(addressInput);
addressGroup.appendChildElement(addressError);

locationStep.appendChildElement(addressGroup);

const cityGroup = new FormGroup();
const cityLabel = new FormLabel("city", "City");
const cityInput = new FormInput("city", "text");
const cityError = new FormError();
cityError.setErrorMessage("Error with city test.");

cityGroup.appendChildElement(cityLabel);
cityGroup.appendChildElement(cityInput);
cityGroup.appendChildElement(cityError);

locationStep.appendChildElement(cityGroup);

const locationButtonNext = new FormButton("Previous");
const locationButtonPrev = new FormButton("Next");
const locationButtonGroup = new ButtonGroup();
locationButtonGroup.appendChildElement(locationButtonNext);
locationButtonGroup.appendChildElement(locationButtonPrev);
locationStep.appendChildElement(locationButtonGroup);


// Zip
const zipStep = new FormStep();
const zipGroup = new FormGroup();
const zipLabel = new FormLabel("zip", "Zip");
const zipInput = new FormInput("zip", "text");
const zipError = new FormError();
zipError.setErrorMessage("Error with zip test.");

zipGroup.appendChildElement(zipLabel);
zipGroup.appendChildElement(zipInput);
zipGroup.appendChildElement(zipError);

zipStep.appendChildElement(zipGroup);

const zipButtonNext = new FormButton("Previous");
const zipButtonPrev = new FormButton("Next");
const zipButtonGroup = new ButtonGroup();
zipButtonGroup.appendChildElement(zipButtonNext);
zipButtonGroup.appendChildElement(zipButtonPrev);
zipStep.appendChildElement(zipButtonGroup);

// State Step
const stateStep = new FormStep();
const stateGroup = new FormGroup();
const stateLabel = new FormLabel("state", "State");
const stateSelect = new FormSelect(usStates);
stateSelect.addOptions(usStates);
const stateError = new FormError();

stateGroup.appendChildElement(stateLabel);
stateGroup.appendChildElement(stateSelect);
stateGroup.appendChildElement(stateError);

stateStep.appendChildElement(stateGroup);

const stateButtonNext = new FormButton("Previous");
const stateButtonPrev = new FormButton("Next");
const stateButtonGroup = new ButtonGroup();
stateButtonGroup.appendChildElement(stateButtonNext);
stateButtonGroup.appendChildElement(stateButtonPrev);
stateStep.appendChildElement(stateButtonGroup);

// Make & Model
const makeModelStep = new FormStep();
const makeGroup = new FormGroup();
const makeLabel = new FormLabel("make", "Make");
const makeSelect = new FormSelect();
// TODO: Add makes
makeSelect.addOptions(usStates);
const makeError = new FormError();

makeGroup.appendChildElement(makeLabel);
makeGroup.appendChildElement(makeSelect);
makeGroup.appendChildElement(makeError);

const modelGroup = new FormGroup();
const modelLabel = new FormLabel("model", "Model");
const modelSelect = new FormSelect();
modelSelect.addOptions(usStates);
const modelError = new FormError();

modelGroup.appendChildElement(modelLabel);
modelGroup.appendChildElement(modelSelect);
modelGroup.appendChildElement(modelError);

makeModelStep.appendChildElement(modelGroup);
makeModelStep.appendChildElement(makeGroup);

const makeModelButtonNext = new FormButton("Previous");
const makeModelButtonPrev = new FormButton("Next");
const makeModelButtonGroup = new ButtonGroup();
makeModelButtonGroup.appendChildElement(makeModelButtonNext);
makeModelButtonGroup.appendChildElement(makeModelButtonPrev);
makeModelStep.appendChildElement(makeModelButtonGroup);

// Vehicle Year
const vehicleYearStep = new FormStep();
const vehicleYearGroup = new FormGroup();
const vehicleYearLabel = new FormLabel("vehicleYear", "Vehicle Year");
const vehicleYearInput = new FormInput("vehicleYear", "number");
const vehicleYearError = new FormError();
vehicleYearError.setErrorMessage("Error with vehicle year test.");

vehicleYearGroup.appendChildElement(vehicleYearLabel);
vehicleYearGroup.appendChildElement(vehicleYearInput);
vehicleYearGroup.appendChildElement(vehicleYearError);

vehicleYearStep.appendChildElement(vehicleYearGroup);

const vehicleYearButtonNext = new FormButton("Previous");
const vehicleYearButtonPrev = new FormButton("Next");
const vehicleYearButtonGroup = new ButtonGroup();
vehicleYearButtonGroup.appendChildElement(vehicleYearButtonNext);
vehicleYearButtonGroup.appendChildElement(vehicleYearButtonPrev);
vehicleYearStep.appendChildElement(vehicleYearButtonGroup);

// Mileage
const vehicleMileageStep = new FormStep();
const vehicleMileageGroup = new FormGroup();
const vehicleMileageLabel = new FormLabel("vehicleMileage", "Vehicle Mileage");
const vehicleMileageInput = new FormInput("vehicleMileage", "number");
const vehicleMileageError = new FormError();
vehicleMileageError.setErrorMessage("Error with vehicle mileage test.");

vehicleMileageGroup.appendChildElement(vehicleMileageLabel);
vehicleMileageGroup.appendChildElement(vehicleMileageInput);
vehicleMileageGroup.appendChildElement(vehicleMileageError);

vehicleMileageStep.appendChildElement(vehicleMileageGroup);

const vehicleMileageButtonNext = new FormButton("Previous");
const vehicleMileageButtonPrev = new FormButton("Next");
const vehicleMileageButtonGroup = new ButtonGroup();
vehicleMileageButtonGroup.appendChildElement(vehicleMileageButtonNext);
vehicleMileageButtonGroup.appendChildElement(vehicleMileageButtonPrev);
vehicleMileageStep.appendChildElement(vehicleMileageButtonGroup);

// Vin
const vinStep = new FormStep();
const vinGroup = new FormGroup();
const vinLabel = new FormLabel("vin", "VIN");
const vinInput = new FormInput("vin", "text");
const vinError = new FormError();
vinError.setErrorMessage("Error with vehicle mileage test.");

vinGroup.appendChildElement(vinLabel);
vinGroup.appendChildElement(vinInput);
vinGroup.appendChildElement(vinError);

vinStep.appendChildElement(vinGroup);

const vinButtonNext = new FormButton("Previous");
const vinButtonPrev = new FormButton("Finish");
const vinButtonGroup = new ButtonGroup();
vinButtonGroup.appendChildElement(vinButtonNext);
vinButtonGroup.appendChildElement(vinButtonPrev);
vinStep.appendChildElement(vinButtonGroup);

// Parent
msf.appendChildElement(nameStep);
msf.appendChildElement(emailStep);
msf.appendChildElement(phoneNumberStep);
msf.appendChildElement(dobStep);
msf.appendChildElement(locationStep);
msf.appendChildElement(zipStep);
msf.appendChildElement(stateStep);
msf.appendChildElement(makeModelStep);
msf.appendChildElement(vehicleYearStep);
msf.appendChildElement(vehicleMileageStep);
msf.appendChildElement(vinStep);
