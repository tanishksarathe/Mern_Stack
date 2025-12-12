const random = Math.floor(Math.random() * 10) + 1;

let count = 5;

function check() {
  const key = document.getElementById("guessed").value;

  if (key == random) {
    document.getElementById(
      "ans"
    ).innerText = `Congratulatios... \u{1F38A}\u{1F38A}\u{1F38A}`;
  } else if (key > random) {
    document.getElementById("ans").innerText = `Try a smaller number..`;

    count = count - 1;

    document.getElementById(
      "chances"
    ).innerText = `You are left with only ${count} attempts...`;
  } else {
    document.getElementById("ans").innerText = `Try a greater number..`;

    count = count - 1;
    document.getElementById(
      "chances"
    ).innerText = `You are left with only ${count} attempts...`;
  }

  if (count == 0) {
    document.getElementById(
      "ans"
    ).innerText = `Oops game over. The number was ${random}. Restart I'm sure you will make it this time.`;
  }
}

function restart() {
  location.reload();
}
