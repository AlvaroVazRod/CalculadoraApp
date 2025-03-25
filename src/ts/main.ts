import { Calculator } from "./Calculator";

const calculator = new Calculator();
const screen = document.querySelector(".screen") as HTMLDivElement;
const buttons = document.querySelectorAll(".btn");
const themeSlider = document.querySelector(".slider") as HTMLInputElement;
const body = document.body;
function updateDisplay(): void {
  screen.textContent = calculator.displayValue;
}


// Función para actualizar el tema
function updateTheme(): void {
  const themeValue = themeSlider.value; // Obtiene el valor del slider (1, 2 o 3)
  const newTheme = `theme-${themeValue}`;

  // Remueve las clases anteriores
  body.classList.remove("theme-1", "theme-2", "theme-3");
  
  // Agrega la nueva clase del tema
  body.classList.add(newTheme);
  
  console.log(`Tema cambiado a: ${newTheme}`); // Para depuración
}


// Escuchar cambios en el input range
themeSlider.addEventListener("input", updateTheme);




buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent || "";

    if (!isNaN(parseFloat(value)) || value === ".") {
      calculator.appendNumber(value);
    } else if (["+", "-", "x", "/"].includes(value)) {
      calculator.chooseOperation(value);
    } else if (value === "=") {
      calculator.compute();
    } else if (value === "DEL") {
      calculator.delete();
    } else if (value === "RESET") {
      calculator.reset();
    }
    updateTheme();
    updateDisplay();
  });
});
updateTheme();
updateDisplay();
