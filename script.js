// Select all button elements
const buttonsEl = document.querySelectorAll('button');

// Select the calculator display input field
const inputFieldEl = document.getElementById('result');

// Add click event listeners to each button
for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent; // Get the button's text
        if (buttonValue === 'C') {
            clearResult(); // Clear display if 'C' is pressed
    } else if (buttonValue === '='){
            calculateResult(); // Calculate result if = is pressed
    } else {
        appendValue(buttonValue); // Append number/operator to display
    }
 });
}
// Function to clear the calculator display
function clearResult() {
    inputFieldEl.value = '';
}
// Function to evaluate and display the result
function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value);
}
// Function to append pressed button value to the display
function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue;
}
