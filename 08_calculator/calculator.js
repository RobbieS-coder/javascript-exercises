const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
	return array.reduce((total, current) => total * current, 1);
};

const power = function(num, power) {
	let newNum = 1;
	for (let i = 0; i < power; i++) {
		newNum *= num;
	}

	return newNum;
};

const factorial = function(num) {
	let newNum = 1;
	for (let i = 0; i < num; num--) {
		newNum *= num;
	}

	return newNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
