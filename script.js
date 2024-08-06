document.addEventListener("DOMContentLoaded", function () {
  // Select display input element and select all button elements
  const display = document.querySelector(".display-input");
  const buttons = document.querySelectorAll(".button");

  let expression = ""; //input expression

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.getAttribute("data-value"); //-> get value

      if (!isNaN(value) || value === ".") {
        //-> number or a dot add it to the expression
        expression += value;
        display.value = expression;
      } else if (value === "AC") {
        //-> the value is 'AC'
        expression = ""; //-> clear expression the display
        display.value = "";
      } else if (value === "DEL") {
        expression = expression.slice(0, -1); //-> remove last character
        display.value = expression;
      } else if (value === "=") {
        try {
          expression = eval(expression).toString(); //-> evaluate
        } catch (e) {
          expression = "Error"; //-> set expression to error
        }
        display.value = expression;
      } else {
        if (expression && !isNaN(expression.slice(-1))) {
          //-> for other operators
          expression += value; //-> add the operator
          display.value = expression;
        }
      }
    });
  });
});
