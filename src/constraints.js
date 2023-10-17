import validate from "validate.js";
import { usStates } from "./data";

validate.validators.validatePhoneNumber = function (
  value,
  options,
  key,
  attributes
) {
  const phoneRegex = /^\d{10}$/;

  if (!phoneRegex.test(value)) {
    return options.message || "Invalid phone number";
  }
};

validate.validators.ageRange = function (value, options, key, attributes) {
  const today = new Date();
  const birthDate = new Date(value);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age < options.minimum || age > options.maximum) {
    return (
      options.message ||
      `Age must be between ${options.minimum} and ${options.maximum}.`
    );
  }
};

validate.validators.validateVehicleYear = function (
  value,
  options,
  key,
  attributes
) {
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 20;
  const maxYear = currentYear;

  if (value < minYear || value > maxYear) {
    return (
      options.message ||
      `Vehicle year must be between ${minYear} and ${maxYear}.`
    );
  }
};

validate.validators.milesRange = function (value, options, key, attributes) {
  const minValue = options.minValue || 0;
  const maxValue = options.maxValue || 200000;

  if (value < minValue || value > maxValue) {
    return (
      options.message || `Miles must be between ${minValue} and ${maxValue}.`
    );
  }
};

validate.validators.validateVIN = function (value, options, key, attributes) {
  const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;

  if (!vinRegex.test(value)) {
    return options.message || "Invalid VIN format";
  }
};

export const constraints = {
  firstName: {
    format: {
      pattern: "[a-zA-Z]+",
      message: "must not be empty",
    },
    length: {
      minimum: 2,
      message: "must be at least 2 characters",
    },
  },
  lastName: {
    format: {
      pattern: "[a-zA-Z]+",
      message: "must not be empty",
    },
    length: {
      minimum: 2,
      message: "must be at least 2 characters",
    },
  },
  email: {
    email: true,
  },
  phoneNumber: {
    format: {
      pattern: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
      message: "Must be in the format (###-###-####)",
    },
  },
  zip: {
    format: {
      pattern: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
      message: "Must be a valid zip code",
    },
  },
  vehicleMiles: {
    numericality: {
      greaterThanOrEqualTo: 0,
      lessThanOrEqualTo: 200000,
    },
  },
  vehicleYear: {
    numericality: {
      greaterThanOrEqualTo: new Date().getFullYear() - 20,
    },
    length: {
      is: 4,
    },
  },
  vin: {
    format: {
      pattern: /^[A-HJ-NPR-Z0-9]{17}$/,
      message:
        "must be a valid VIN (17 alphanumeric characters, excluding I, O, and Q)",
    },
  },
  dateOfBirth: {
    ageRange: {
      minimum: 18,
      maximum: 100,
      message: "You must be between 18 and 100 years old.",
    },
  },
  address: {
    length: {
      minimum: 3,
      message: "must be at least 3 characters",
    },
  },
  state: {
    exclusion: {
      within: ["Choose...", ...usStates],
      message: "has to be selected",
    },
  },
  make: {
    exclusion: {
      within: ["Choose...", ...usStates],
      message: "has to be selected",
    },
  },
  model: {
    exclusion: {
      within: ["", "Choose..."],
      message: "has to be selected",
    },
  },
};
