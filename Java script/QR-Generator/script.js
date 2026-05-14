const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generateBtn.addEventListener  ('click', (e) => {
  e.preventDefault();
  size = sizes.value;
  if (qrText.value.trim().length > 0) {
    generateQRCode();
  } else {
    alert("Enter the text or URL");
  }
});


downloadBtn.addEventListener('click', () => {
  const img = document.querySelector('.qr-body img') || document.querySelector('canvas');
  if (img) {
    const dataURL = img.src || img.toDataURL();
    downloadBtn.href = dataURL;
  }
});


function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    width: size,
    height: size,
    colorDark: "#000",
    colorLight: "#fff"
  });
}