let display = document.getElementById("display");
let previous = document.getElementById("previous");


function appendValue(value) {

    display.value += value;

}


function clearDisplay() {

    display.value = "";
    previous.textContent = "";

}


function calculate() {

    try {

        let expression = display.value;

        // Prevent division by zero
        if (expression.includes("/0")) {
            display.value = "Cannot divide by zero";
            return;
        }

        let result = eval(expression);

        // Show previous calculation
        previous.textContent = expression + " =";

        // Show result
        display.value = result;

    } catch {

        display.value = "Error";

    }

}