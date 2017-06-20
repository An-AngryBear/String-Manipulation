

// The output of each of the functions should immediately appear as well.
const submitBtn = document.getElementById("submit-btn"),
	textInput = document.getElementById("text-input"),
	container = document.getElementById("container");
let testString = "";

// Implement the logic in the reversal function that reverses the order of the characters in the string,
// and outputs the result in the DOM, below the text input.
function reversal(string) {
	let reversedString = string.split("").reverse().join("");
	let output = document.createElement("p");
	output.innerHTML = reversedString;
	container.appendChild(output);
}

// Implement the logic in the alphabits function that return the characters in alphabetical order,
// and outputs the result in the DOM, below the text input.
function alphabits(string) {
	let alphabetized = string.split("").sort().join("");
	let output = document.createElement("p");
	output.innerHTML = alphabetized;
	container.appendChild(output);
}

// Implement the logic in the palindrome function that determine whether the string is a palindrome.
// If it is, display the text "Your string is a palindrome" in the DOM, below the text input.
function palindrome(string) {
	let palindromized = string.split("");
	for (let i = 0; i < Math.ceil(palindromized.length * .5) ; i++) {
		if (palindromized[i] !== palindromized[(palindromized.length - 1) - i]) {
			palindromized[i] = false;
		} else palindromized[i] = true;
	}
	if (!palindromized.includes(false)) {
		let output = document.createElement("p");
		output.innerHTML = "Your string is a palindrome";
		container.appendChild(output);
	}
}

// The text input should only accept letters.
function letterValidation() {
	if (event.keyCode !== 8) {
		if (!(event.keyCode > 64 && event.keyCode < 91)) {
			event.preventDefault();
		}
	}
}

// When the user presses the enter key in the text input, or clicks the button,
// set the value of the testString variable (see below) to the value of the input.
submitBtn.addEventListener("click", function() {
	testString = textInput.value;
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
	textInput.value = "";
})

function enterAsSubmit() {
	if (event.keyCode === 13) {
		submitBtn.click();
		textInput.value = "";
	}
}

textInput.addEventListener("keydown", letterValidation)
textInput.addEventListener("keyup", enterAsSubmit);
