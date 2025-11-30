function Input(char) {
  if (char === "=") {
    try{
        let exp = document.getElementById("response").value;
    document.getElementById("response").value = eval(exp);
    }
    catch(error){
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
