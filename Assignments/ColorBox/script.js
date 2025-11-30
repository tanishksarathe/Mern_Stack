let bgcolor = document.getElementById("colorbg");
bgcolor.addEventListener("change", () => changeColorBg(bgcolor.value));

function changeColorBg(b) {
  document.getElementById("innerBox").style.backgroundColor = b;
}

let headingcolor = document.getElementById("colorh");
headingcolor.addEventListener("change", () =>
  changeColorHeading(headingcolor.value)
);

function changeColorHeading(a) {
  document.getElementById("heading").style.color = a;
}

let paracolor = document.getElementById("colorp");
paracolor.addEventListener("change", () => changeColorPara(paracolor.value));

function changeColorPara(c) {
  document.getElementById("paragraph").style.color = c;
}
