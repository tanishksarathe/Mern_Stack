function start() {
  console.log("Game started");
  document.getElementById("roll1").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
}

function restart() {
  window.location.reload();
  console.log("Game restarted");
}

function p1Play() {
  console.log("Game P1 Rolled");
  const num = Math.floor(Math.random() * 6) + 1;
  console.log(num);

        document.getElementById("dice1").src=`/Assets/${num}.jpeg`;


  if (num == 6) {
    document.getElementById("roll1").disabled = true;
    document.getElementById("roll2").disabled = false;
  } else {
    let scores = Number(document.getElementById("score1").innerText);

    scores = scores + num;

    document.getElementById("score1").innerText = scores;
  }
}

function p2Play() {
  console.log("Game P2 Rolled");
  const num = Math.floor(Math.random() * 6) + 1;

      document.getElementById("dice1").src=`/Assets/${num}.jpeg`;
  

  if (num == 6) {
    document.getElementById("roll2").disabled = true;
    document.getElementById("roll1").disabled = false;
  } else {
    second = Number(document.getElementById("score2").innerText);

    second = second + num;

    document.getElementById("score2").innerText = second;
  }
}
