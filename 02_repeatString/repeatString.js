const repeatString = function(str, repeats) {
	if (repeats < 0) {
		return "ERROR";
	}
	let stringRepeated = "";

	for (; repeats > 0; repeats--) {
		stringRepeated += str;
	}
	return stringRepeated;
};

// Do not edit below this line
module.exports = repeatString;
