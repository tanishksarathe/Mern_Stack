function add() {
  const site = document.getElementById("site").value.trim();
  const un = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  const dataPacket = {
    website: site,
    user: un,
    password: pass,
  };

  console.log(dataPacket);

  const Data = JSON.parse(localStorage.getItem()) || [];

  Data.push(dataPacket);

  localStorage.setItem("Password Manager", Data);

  document.getElementById("site").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

function downloadfile() {
  const data = JSON.parse(localStorage.getItem("Password Manager")) || [];

  if (data.length <= 0) {
    alert("Data not found");
    return;
  }

  const headers = Object.keys(data[0]).join(",") + "\n";

  const rows = data.map((item) => Object.values(item)).join("\n");

  const CSV = headers + rows;

  const blob = new Blob([CSV], {type:"text/csv"});

  const anchorTag = document.createElement("a");
  anchorTag.href = URL.createObjectURL(blob);
  anchorTag.download = "data.csv";
  anchorTag.click();

  localStorage.removeItem("Password Manager");
}
