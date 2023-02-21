const screen = document.getElementById("screen");
const del = document.getElementById("del");
const reset = document.getElementById("res");
const plus = document.getElementById("pls");
const minus = document.getElementById("mns");
const times = document.getElementById("times");
const dvd = document.getElementById("dvd");
const equals = document.getElementById("equ");
var result = screen.innerHTML;
var number1 = 0;
var number2 = 0;

window.addEventListener("load", () => {
  for (
    let i = 0;
    i < document.getElementsByClassName("numberBtn").length;
    i++
  ) {
    document
      .getElementsByClassName("numberBtn")
      [i].addEventListener("click", (event) => {
        if (event.target.innerHTML == ".") {
          if (
            result.slice(-1) == "+" ||
            result.slice(-1) == "-" ||
            result.slice(-1) == "x" ||
            result.slice(-1) == "/"
          ) {
            result = `${result}0${event.target.innerHTML}`;
          } else {
            result = `${result}${event.target.innerHTML}`;
          }
        } else if (result == "0") {
          result = event.target.innerHTML;
        } else {
          result = `${result}${event.target.innerHTML}`;
        }
        screen.innerHTML = result;
        scrollScreen();
      });
  }
});

del.addEventListener("click", () => {
  if (result.length > 1) {
    result = String(result).slice(0, result.length - 1);
    screen.innerHTML = result;
  } else {
    zero();
  }
});

function zero() {
  result = 0;
  screen.innerHTML = result;
}

reset.addEventListener("click", () => {
  zero();
});

plus.addEventListener("click", () => {
  if (result != 0) {
    if (
      result.indexOf("+") > 0 ||
      result.indexOf("-") > 0 ||
      result.indexOf("/") > 0 ||
      result.indexOf("x") > 0
    ) {
      if (result.indexOf("+") > 0) {
        number2 = result.slice(result.indexOf("+") + 1);
        result = sum(number1, number2);
      } else if (
        result.indexOf("-") > 0 &&
        result.indexOf("-") < result.length - 1
      ) {
        number2 = result.slice(result.indexOf("-") + 1);
        result = substract(number1, number2);
      } else if (
        result.indexOf("/") > 0 &&
        result.indexOf("/") < result.length - 1
      ) {
        number2 = result.slice(result.indexOf("/") + 1);
        result = divide(number1, number2);
      } else if (
        result.indexOf("x") > 0 &&
        result.indexOf("x") < result.length - 1
      ) {
        number2 = result.slice(result.indexOf("x") + 1);
        result = multiply(number1, number2);
      } else if (
        result.indexOf("-") == result.length - 1 ||
        result.indexOf("/") == result.length - 1 ||
        result.indexOf("x") == result.length - 1
      ) {
        result = result.slice(0, result.length - 1);
      }
      number1 = result;
      result += "+";
      screen.innerHTML = result;
    } else {
      number1 = result;
      result += "+";
      screen.innerHTML = result;
    }
    scrollScreen();
  }
});

minus.addEventListener("click", () => {
  if (result != 0) {
    if (
      result.indexOf("+") > 0 ||
      result.indexOf("-") > 0 ||
      result.indexOf("/") > 0 ||
      result.indexOf("x") > 0
    ) {
      if (result.indexOf("-") > 0) {
        number2 = result.slice(result.indexOf("-") + 1);
        result = substract(number1, number2);
      } else if (
        result.indexOf("+") > 0 &&
        result.indexOf("+") < result.length - 1
      ) {
        number2 = result.slice(result.indexOf("+") + 1);
        result = sum(number1, number2);
      } else if (
        result.indexOf("/") > 0 &&
        result.indexOf("/") < result.length - 1
      ) {
        number2 = result.slice(result.indexOf("/") + 1);
        result = divide(number1, number2);
      } else if (
        result.indexOf("x") > 0 &&
        result.indexOf("x") < result.length - 1
      ) {
        number2 = result.slice(result.indexOf("x") + 1);
        result = multiply(number1, number2);
      } else if (
        result.indexOf("+") == result.length - 1 ||
        result.indexOf("/") == result.length - 1 ||
        result.indexOf("x") == result.length - 1
      ) {
        result = result.slice(0, result.length - 1);
      }
      number1 = result;
      result += "-";
      screen.innerHTML = result;
    } else {
      number1 = result;
      result += "-";
      screen.innerHTML = result;
    }
    scrollScreen();
  }
});

dvd.addEventListener("click", () => {
  if (result != 0) {
    if (
      result.indexOf("+") > 0 ||
      result.indexOf("-") > 0 ||
      result.indexOf("/") > 0 ||
      result.indexOf("x") > 0
    ) {
      if (result.indexOf("/") > 0) {
        number2 = result.slice(result.indexOf("/") + 1);
        result = divide(number1, number2);
      } else if (
        result.indexOf("+") > 0 &&
        result.indexOf("+") < result.length - 1
      ) {
        number2 = result.slice(result.indexOf("+") + 1);
        result = sum(number1, number2);
      } else if (
        result.indexOf("-") > 0 &&
        result.indexOf("-") < result.length - 1
      ) {
        number2 = result.slice(result.indexOf("-") + 1);
        result = substract(number1, number2);
      } else if (
        result.indexOf("x") > 0 &&
        result.indexOf("x") < result.length - 1
      ) {
        number2 = result.slice(result.indexOf("x") + 1);
        result = multiply(number1, number2);
      } else if (
        result.indexOf("+") == result.length - 1 ||
        result.indexOf("-") == result.length - 1 ||
        result.indexOf("x") == result.length - 1
      ) {
        result = result.slice(0, result.length - 1);
      }
      number1 = result;
      result += "/";
      screen.innerHTML = result;
    } else {
      number1 = result;
      result += "/";
      screen.innerHTML = result;
    }
    scrollScreen();
  }
});

times.addEventListener("click", () => {
  if (result != 0) {
    if (
      result.indexOf("+") > 0 ||
      result.indexOf("-") > 0 ||
      result.indexOf("/") > 0 ||
      result.indexOf("x") > 0
    ) {
      if (result.indexOf("x") > 0) {
        number2 = result.slice(result.indexOf("x") + 1);
        result = multiply(number1, number2);
      } else if (
        result.indexOf("+") > 0 &&
        result.indexOf("+") < result.length - 1
      ) {
        number2 = result.slice(result.indexOf("+") + 1);
        result = sum(number1, number2);
      } else if (
        result.indexOf("-") > 0 &&
        result.indexOf("-") < result.length - 1
      ) {
        number2 = result.slice(result.indexOf("-") + 1);
        result = substract(number1, number2);
      } else if (
        result.indexOf("/") > 0 &&
        result.indexOf("/") < result.length - 1
      ) {
        number2 = result.slice(result.indexOf("/") + 1);
        result = divide(number1, number2);
      } else if (
        result.indexOf("+") == result.length - 1 ||
        result.indexOf("-") == result.length - 1 ||
        result.indexOf("x") == result.length - 1
      ) {
        result = result.slice(0, result.length - 1);
      }
      number1 = result;
      result += "x";
      screen.innerHTML = result;
    } else {
      number1 = result;
      result += "x";
      screen.innerHTML = result;
    }
    scrollScreen();
  }
});

equals.addEventListener("click", () => {
  if (result != 0) {
    if (
      result.indexOf("+") > 0 ||
      result.indexOf("-") > 0 ||
      result.indexOf("/") > 0 ||
      result.indexOf("x") > 0
    ) {
      if (result.indexOf("x") > 0 && result.indexOf("x") < result.length - 1) {
        number2 = result.slice(result.indexOf("x") + 1);
        result = multiply(number1, number2);
      } else if (
        result.indexOf("+") > 0 &&
        result.indexOf("+") < result.length - 1
      ) {
        number2 = result.slice(result.indexOf("+") + 1);
        result = sum(number1, number2);
      } else if (
        result.indexOf("-") > 0 &&
        result.indexOf("-") < result.length - 1
      ) {
        number2 = result.slice(result.indexOf("-") + 1);
        result = substract(number1, number2);
      } else if (
        result.indexOf("/") > 0 &&
        result.indexOf("/") < result.length - 1
      ) {
        number2 = result.slice(result.indexOf("/") + 1);
        result = divide(number1, number2);
      } else if (
        result.indexOf("+") == result.length - 1 ||
        result.indexOf("-") == result.length - 1 ||
        result.indexOf("x") == result.length - 1
      ) {
        result = result.slice(0, result.length - 1);
      }
      number1 = result;
      result = String(result)
      screen.innerHTML = result;
    } else {
      number1 = result;
      result = String(result)
      screen.innerHTML = result;
    }
    console.log(result)
    scrollScreen();
  }
});

function scrollScreen() {
  screen.scrollLeft = screen.scrollWidth;
}

function sum(a, b) {
  return Number(a) + Number(b);
}

function substract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  return Number(a) % Number(b) != 0
    ? (Number(a) / Number(b)).toFixed(2)
    : Number(a) / Number(b);
}
