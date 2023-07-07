let imageBox = document.getElementById("imageBox");
let qrImage = document.getElementById("qrImage");
let qrInput = document.getElementById("qrInput");
let api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function generateQR() {
  imageBox.classList.remove("showImg");
  if (qrInput.value.length > 0) {
    qrImage.src = api + qrInput.value;
    imageBox.classList.add("showImg");
    console.log("OK")
  } else {
    qrInput.classList.add("error");
    setTimeout(() => {
      qrInput.classList.remove("error");
    }, 1000);
    console.log("Error")
  }
}