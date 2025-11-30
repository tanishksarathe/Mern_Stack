function On() {
  document.getElementById("bulb").style.backgroundColor = "yellow";
}
function Off() {
  document.getElementById("bulb").style.backgroundColor = "white";
}
function Red() {
  document.getElementById("bulb").style.backgroundColor = "red";
}
function Blue() {
  document.getElementById("bulb").style.backgroundColor = "blue";
}
function Green() {
  document.getElementById("bulb").style.backgroundColor = "green";
}

const usercolor = document.getElementById("color");
usercolor.addEventListener("change", () => {
  changeBulbColor(usercolor.value);
});

function changeBulbColor(value) {
  document.getElementById("bulb").style.backgroundColor = value;
}

function sbControl(){
    const btn =
document.getElementById("smartControl");
if(btn.innerText === 'On'){
    document.getElementById("smartControl").innerHTML='Off';
        document.getElementById("smartBulb").classList.add("on");
}
else{
 document.getElementById("smartControl").innerHTML='On';
        document.getElementById("smartBulb").classList.remove("on");
}
}