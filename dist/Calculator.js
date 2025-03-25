export class Calculator {
    currentInput = "0";
    previousInput = "";
    operation = null;
    get displayValue() {
        return this.currentInput;
    }
    appendNumber(number) {
        if (this.currentInput === "0" && number !== ".") {
            this.currentInput = number;
        }
        else if (!(number === "." && this.currentInput.includes("."))) {
            this.currentInput += number;
        }
    }
    chooseOperation(op) {
        if (this.currentInput === "")
            return;
        if (this.previousInput !== "")
            this.compute();
        this.operation = op;
        this.previousInput = this.currentInput;
        this.currentInput = "";
    }
    compute() {
        if (!this.operation || this.previousInput === "" || this.currentInput === "")
            return;
        const prev = parseFloat(this.previousInput);
        const current = parseFloat(this.currentInput);
        let result = null;
        switch (this.operation) {
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "x":
                result = prev * current;
                break;
            case "/":
                if (current === 0) {
                    alert("No se puede dividir por 0");
                    return;
                }
                result = prev / current;
                break;
        }
        if (result !== null) {
            this.currentInput = result.toString();
            this.operation = null;
            this.previousInput = "";
        }
    }
    delete() {
        this.currentInput = this.currentInput.slice(0, -1) || "0";
    }
    reset() {
        this.currentInput = "0";
        this.previousInput = "";
        this.operation = null;
    }
}
//# sourceMappingURL=Calculator.js.map