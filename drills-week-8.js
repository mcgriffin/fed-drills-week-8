function greaterNum(arg1, arg2) {
	if (arg1 > arg2)
		{return arg1 + " is bigger than " + arg2}
	else 
		{return arg2 + " is bigger than " + arg1}
		}

function languageGen (lang) {
	if (lang === "es") {
		return "hola mundo"
	} else if (lang === "de") {
		return "Hello Wereld"
	} else {
		return "Hello World"
	}
}

function assignGrade(num) {
	if (num <= 50) {
		return "FAIL!"
	}

	else if (num === 100) {
		return "Amazing Job!!! You get a gold star"
	}

	else if (51 <= num <= 99) {
		return "Good!"
	}

	else {
		return "Please enter a percentage"
	}
}

function pluralize(num, noun) {
	if (num > 1) {
		return num + " " + noun + "s"
	}

	else {
		return num + " " + noun
	}
}