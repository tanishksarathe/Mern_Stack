function Input(char) {
  if (char === "=") {
    try {
      let exp = document.getElementById("response").value;
      document.getElementById("response").value = eval(exp);
    } catch (error) {
      alert("Pagal hai kya");
      document.getElementById("response").value = "";
    }
  } else if (char === "c") {
    document.getElementById("response").value = "";
  } else {
    let exp = document.getElementById("response").value;
    exp = exp + char;
    document.getElementById("response").value = exp;
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    Input("=");
  } else if (
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "0" ||
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/"
  ) {
    Input(e.key);
  }
  else if(e.key === "Backspace"){
    Input('c');
  }
});
