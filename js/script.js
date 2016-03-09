"use strict";

var nameBuilder = function nameBuilder() {
	var firstName = arguments.length <= 0 || arguments[0] === undefined ? "Bruce" : arguments[0];
	var lastName = arguments.length <= 1 || arguments[1] === undefined ? "Lee" : arguments[1];

	console.log(firstName + " " + lastName);
};

nameBuilder();