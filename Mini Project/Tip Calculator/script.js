function calculate() {
  const amount = document.getElementById("amount").value;

  const exp = document.getElementById("exp").value;

  const persons = document.getElementById("person").value;

  const val = (amount * exp) / (persons * 100);

  document.getElementById("result").innerText = `You can tip : \u20B9${val}`;

  document.getElementById("amount").value = "";
  document.getElementById("person").value = "";
  document.getElementById("exp").value = "";
}
