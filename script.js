const screen = document.getElementById("screen");
var result = screen.innerHTML;
const reset = document.getElementById("res");
const equals = document.getElementById("equ");
const del = document.getElementById("del");

Array.from(document.getElementsByClassName("makeCalculation")).forEach(
  (element) => {
    element.addEventListener("click", () => {
      if (
        String(result).slice(-1) == "+" ||
        String(result).slice(-1) == "-" ||
        String(result).slice(-1) == "*" ||
        String(result).slice(-1) == "/"
      ) {
        result = String(result).slice(0, -1) + element.innerHTML;
      } else {
        result = Math.round(eval(result) * 1000)/1000;
        result = eval(result) + element.innerHTML;
      }
      screen.innerHTML = result;
    });
  }
);

Array.from(document.getElementsByClassName("numberBtn")).forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerHTML == ".") {
      if (String(result).indexOf(".") < 0) { // If we don't have any decimal
        if (
          String(result).slice(-1) == "+" ||
          String(result).slice(-1) == "-" ||
          String(result).slice(-1) == "*" ||
          String(result).slice(-1) == "/"     
        ) {
          result = `${result}0.`;   // If our last character is an operator, add a 0 before "dot"
        } else {                            
          result = `${result}.`;    // If our last character is not an operator, add the "dot"
        }
      } else {                      // If we have decimal before
        let res;
        if (
          String(result).indexOf(".") <
          Math.max(
            String(result).indexOf("+"),
            String(result).indexOf("-"),
            String(result).indexOf("*"),
            String(result).indexOf("/")
          )                               // If our decimal is before the operator (this doesn't handle the situation where our operation is "substract" and our first number is negative)
        ) {
          if (String(result).indexOf("-") == 0) {  // If our first number is negative for "sum", "divide" and "multiply" operations
            res = result.slice(1);          // We ignore the first "-" indicating the negative number
          }
            res = result.slice(
              Math.max(
                String(result).indexOf("+"),
                String(result).indexOf("-"),
                String(result).indexOf("*"),
                String(result).indexOf("/")
              )
            );     // We assign the second number of our operation to "res" variable to check if we have decimal there

          if (String(res).indexOf(".") < 0) {       // If we don't have decimal in the second number
            if (
              String(result).slice(-1) == "+" ||
              String(result).slice(-1) == "-" ||
              String(result).slice(-1) == "*" ||
              String(result).slice(-1) == "/"
            ) {
              result = `${result}0.`;       // If our second number is nothing add a "0" and then a "dot" 
            } else {
              result = `${result}.`;
            }
          }
        } else {                            // If our decimal is after the operator (including the negative sign "-")
            let res;
            if(String(result).indexOf("-") == 0){   // If our first number is negative
                res = result.slice(1);      // We ignore the negative sign
                console.log(res)
                res = res.slice(         // We split the operation into 2
                    Math.max(
                      String(res).indexOf("+"),
                      String(res).indexOf("-"),
                      String(res).indexOf("*"),
                      String(res).indexOf("/")
                    )
                  )     
                  console.log(res)                   

                  if (String(res).indexOf(".") < 0) {       // If we don't have decimal in the second number
                    if (
                      String(result).slice(-1) == "+" ||
                      String(result).slice(-1) == "-" ||
                      String(result).slice(-1) == "*" ||
                      String(result).slice(-1) == "/"
                    ) {
                      result = `${result}0.`;       // If our second number is nothing add a "0" and then a "dot" 
                    } else {
                      result = `${result}.`;
                    }
                }
            }  
        }
      }
    } else {
      String(result).slice(-1) == "."
        ? (result += element.innerHTML)
        : result == 0
        ? (result = element.innerHTML)
        : (result += element.innerHTML);
    }
    screen.innerHTML = result;
    console.log(result);
  });
});

function zero() {
  result = 0;
  screen.innerHTML = result;
}

reset.addEventListener("click", () => {
  zero();
});

equals.addEventListener("click", () => {
  if (
    String(result).slice(-1) == "+" ||
    String(result).slice(-1) == "-" ||
    String(result).slice(-1) == "*" ||
    String(result).slice(-1) == "/"
  ) {
    result = String(result).slice(0, -1);
  }
  result = Math.round(eval(result) * 1000)/1000;
  screen.innerHTML = eval(result);
  console.log(result);
});

del.addEventListener("click", () => {
  console.log(result);
  if (String(result).length > 1) {
    result = String(result).slice(0, -1);
    screen.innerHTML = result;
  } else {
    zero();
  }
  console.log(result);
});
