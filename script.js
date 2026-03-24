let input = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let displayString = "";

let btnArr = Array.from(buttons);

btnArr.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;

    if (value === "=") {
      string = eval(string);
      displayString = string;
      input.value = displayString;
      string = string.toString();
    } else if (value === "AC") {
      string = "";
      displayString = "";
      input.value = displayString;
    } else if (value === "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (value === "%") {
      let match = string.match(/(\d+\.?\d*)$/);
      if (match) {
        let num = match[0];
        let percent = num / 100;
        string = string.replace(/(\d+\.?\d*)$/, percent);
        displayString = string;
        input.value = displayString;
      }
    } else {
      // internal calculation string
      string += value === "×" ? "*" : value === "÷" ? "/" : value;
      // visible string
      displayString += value;
      input.value = displayString;
    }
  });
});
