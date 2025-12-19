async function getjoke() {
  const response = await fetch(
    "https://official-joke-api.appspot.com/jokes/random"
  );
  // console.log(response);

  const data = await response.json();

  console.log(data);

  document.getElementById("setup").innerText = data.setup;
  document.getElementById("punchline").innerText = data.punchline;
  document.getElementById("smile").innerText = `\u{1F602}\u{1F602}\u{1F602}`;

}
