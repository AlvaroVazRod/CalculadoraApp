export class Calculator {
    private currentInput: string = "0";
    private previousInput: string = "";
    private operation: string | null = null;
  
    get displayValue(): string {
      return this.currentInput;
    }
  
    appendNumber(number: string): void {
      if (this.currentInput === "0" && number !== ".") {
        this.currentInput = number;
      } else if (!(number === "." && this.currentInput.includes("."))) {
        this.currentInput += number;
      }
    }
  
    chooseOperation(op: string): void {
      if (this.currentInput === "") return;
      if (this.previousInput !== "") this.compute();
      this.operation = op;
      this.previousInput = this.currentInput;
      this.currentInput = "";
    }
  
    compute(): void {
      if (!this.operation || this.previousInput === "" || this.currentInput === "") return;
  
      const prev = parseFloat(this.previousInput);
      const current = parseFloat(this.currentInput);
      let result: number | null = null;
  
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
  
    delete(): void {
      this.currentInput = this.currentInput.slice(0, -1) || "0";
    }
  
    reset(): void {
      this.currentInput = "0";
      this.previousInput = "";
      this.operation = null;
    }
  }
  