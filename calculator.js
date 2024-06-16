let inputs = [];
let results = [];

function getUserInput() {
    let x = parseInt(prompt("Enter the first number"));
    let y = parseInt(prompt("Enter the second number"));
    let operator = prompt("Enter an arithmetic operator (+, -, *, /, %)");

    if (!isNaN(x) &&!isNaN(y)) {
        switch (operator) {
            case '+':
                results.push(x + y);
                break;
            case '-':
                results.push(x - y);
                break;
            case '*':
                results.push(x * y);
                break;
            case '/':
                if (y!== 0) {
                    results.push(x / y);
                } else {
                    alert('Division by zero is not allowed.');
                    return false; // Exit function early
                }
                break;
            case '%':
                results.push(x % y);
                break;
            default:
                alert('Invalid operator');
                return false; // Exit function early
        }
        document.write("<table>");
        document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");
        document.write(`<tr><td>${x}</td><td>${operator}</td><td>${y}</td><td>${results[results.length - 1]}</td></tr>`);
        document.write("</table>");

        return true; // Continue loop
    } else {
        alert('Please enter numeric values for both numbers.');
        return false; // Exit function early
    }
}

function calculateSummary() {
    let sum = results.reduce((a, b) => a + b, 0);
    let min = Math.min(...results.filter(result =>!isNaN(result)));
    let max = Math.max(...results.filter(result =>!isNaN(result)));
    let avg = sum / results.length;

    document.write("<table border='1'>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write(`<tr><td>${min}</td><td>${max}</td><td>${avg.toFixed(2)}</td><td>${sum}</td></tr>`);
    document.write("</table>");
}

while (getUserInput()) {}
calculateSummary();