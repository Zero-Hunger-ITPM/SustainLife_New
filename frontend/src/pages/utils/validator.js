import countries from "./countriesList";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const isValidMonth = (month) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months.includes(toTitleCase(month));
};

const isValidCountry = (country) => {
  return countries.includes(toTitleCase(country));
};

const isValidString = (string) => {
  return string.length > 0;
};

const isValidCurrencyAmount = (currency) => {
  // Change currency validation regex
  const regex = /^[1-9]\d*(\.\d+)?$/;
  return regex.test(currency);
};

const isValidDate = (date) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(date);
};

const isValidNumber = (number) => {
  const regex = /^-?\d+$/;
  return regex.test(number);
};

export {
  isValidString,
  isValidCurrencyAmount,
  isValidMonth,
  isValidCountry,
  isValidDate,
  isValidNumber,
};
