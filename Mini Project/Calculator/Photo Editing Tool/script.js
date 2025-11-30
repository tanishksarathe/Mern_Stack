let bright = 1,
  cont = 1,
  inv = 0,
  grays = 0,
  sep = 0,
  bl = 0,
  satu = 1,
  rot = 0;

const img = document.getElementById("image");

console.log(img.src);

if (
  img.src ===
  "http://127.0.0.1:5500/Mini%20Project/Calculator/Photo%20Editing%20Tool/index.html"
) {
  document.getElementById("image").style.display = "none";
} else {
  document.getElementById("uploadImage").style.display = "none";
}

function uploadImage() {
  const file = document.getElementById("upload").files[0];

  const FileURL = URL.createObjectURL(file);

  console.log(file);
  console.log(FileURL);

  document.getElementById("image").src = FileURL;
  document.getElementById("image").style.display = "block";

  document.getElementById("uploadImage").style.display = "none";

  applyFilter();
}

function applyFilter() {
  document.getElementById("image").style.filter = `brightness(${bright}) contrast(${cont}) invert(${inv}%) grayscale(${grays}%) sepia(${sep}%) blur(${bl}px) saturate(${satu}) hue-rotate(${rot}deg)`;
}

function changeBrightness() {
  const value = document.getElementById("Brightness").value;

  bright = (value * 2) / 100;

  applyFilter();
}

function changeContrast() {
  const value = document.getElementById("contrast").value;

  cont = (value * 2) / 100;
  applyFilter();
}

function changeSepia() {
  const value = document.getElementById("sepia").value;

  sep = value;
  applyFilter();
}

function changeGrayScale() {
  const value = document.getElementById("grayscale").value;

  grays = value;
  applyFilter();
}

function changeBlur() {
  const value = document.getElementById("blur").value;

  bl = (value * 2) / 100;
  applyFilter();
}

function changeSaturate() {
  const value = document.getElementById("saturate").value;

  satu = (value * 2) / 100;
  applyFilter();
}

function changeRotate() {
  const value = document.getElementById("rotate").value;

  rot = value;
  applyFilter();
}

function changeInvert() {
  const value = document.getElementById("invert").value;

  inv = value;
  applyFilter();
}

function download() {
  // view -> canvas -> link -> download

  if (
    img.src ===
    "http://127.0.0.1:5500/Mini%20Project/Calculator/Photo%20Editing%20Tool/index.html"
  ) {
    alert("Please Upload Image First");
    return;
  }

  if (!img.complete) {
    alert("Image Upload is in Progress.....Please wait");
    return;
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // for original size

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const filter = getComputedStyle(img).filter;

  ctx.filter = filter === "none" ? "none" : filter;

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const newDataURL = canvas.toDataURL("image/png");

  const anchortag = document.createElement("a");

  anchortag.href = newDataURL;

  anchortag.download = "editedImage.png";

  document.body.appendChild(anchortag);

  anchortag.click();

  document.body.removeChild(anchortag);
}

function reset() {
  (bright = 1),
    (cont = 1),
    (inv = 0),
    (grays = 0),
    (sep = 0),
    (bl = 0),
    (satu = 1),
    (rot = 0);

  applyFilter();
  document.getElementById("Brightness").value="50";
   document.getElementById("contrast").value="50";
    document.getElementById("invert").value="0";
    document.getElementById("rotate").value="0";
    document.getElementById("saturate").value="50";
    document.getElementById("blur").value="0";
    document.getElementById("grayscale").value="0";
    document.getElementById("sepia").value="0";




}
