document.getElementById("submit-button").addEventListener("click", addNewQr);
document
  .getElementById("submit-batch-button")
  .addEventListener("click", batchUpload);
var qrLocation = 1;
const sortByOptions = ["Oldest first", "Newest first", "Name"]

function batchUpload(e) {
  var file = document.getElementById("batch-upload");
  var input = file.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    const lines = e.target.result.split("\n");
    lines.forEach((line) => {
      const rows = line.split(",");
      if (rows[0] !== "title") {
        const title = rows[0];
        const url = rows[1];
        const color = rows[2].replace("\r", "");

        makeQrCode(url, title, color);
      }
    });
  };
  reader.readAsText(input);
}

function addNewQr(e) {
  var color = document.getElementById("qr-color").value;
  var url = document.getElementById("site-url").value;
  var title = document.getElementById("site-title").value;

  makeQrCode(url, title, color);
}
function makeControlsRow() {
  var container = document
  .getElementById("controls-container");

  var downloadAllButton = downloadAllButtonComponent();
  container.appendChild(downloadAllButton);

  var sortBySelect = sortBySelectComponent(sortByOptions);
  container.appendChild(sortBySelect);
}
function makeQrCode(url, title, color) {
  var downloadAll = document.getElementById("download-all");
  if (downloadAll === null) {
    makeControlsRow();
  }

  var card = QRCardComponent();
  document.getElementById("qr-list").appendChild(card);

  var qrcode = new QRCode(card, {
    text: url,
    width: 128,
    width: 128,
    height: 128,
    colorDark: color,
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  var cardBody = QRCardBodyComponent(card, title, url);
  card.appendChild(cardBody);

  qrLocation++;
}
