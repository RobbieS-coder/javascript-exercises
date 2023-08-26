const convertToCelsius = function(tempFahr) {
	let tempCels = (tempFahr - 32) * (5 / 9);
	return Math.round(tempCels * 10) / 10;
};

const convertToFahrenheit = function(tempCels) {
	let tempFahr = (tempCels * (9 / 5) + 32);
	return Math.round(tempFahr * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
