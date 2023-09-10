var batchForm = document.getElementById("batch-qr-form");

if (batchForm.attachEvent) {
  batchForm.attachEvent("submit", batchUpload);
} else {
  batchForm.addEventListener("submit", batchUpload);
}

var singleForm = document.getElementById("single-qr-code-form");
if (singleForm.attachEvent) {
  singleForm.attachEvent("submit", addNewQr);
} else {
  singleForm.addEventListener("submit", addNewQr);
}

var qrLocation = 1;
const sortByOptions = ["Oldest first", "Newest first", "Name"];
var sortSelected = 0;

var cards = []; // { title: string; url: string; color: string; timeAdded: DateTime; card: HTMLElement }[]

function batchUpload(e) {
  if (e.preventDefault) e.preventDefault();

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

  return false;
}

function addNewQr(e) {
  if (e.preventDefault) e.preventDefault();
  var color = document.getElementById("qr-color").value;
  var url = document.getElementById("site-url").value;
  var title = document.getElementById("site-title").value;

  makeQrCode(url, title, color);
  return false;
}
function makeControlsRow() {
  var container = document
  .getElementById("controls-container");

  var downloadAllButton = downloadAllButtonComponent();
  container.appendChild(downloadAllButton);

  var sortBySelect = sortBySelectComponent(sortByOptions, changeSort);
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

  cards.push({
    title,
    url,
    color,
    timeAdded: Date.now(),
    card
  });

  sortCards(sortSelected);
  qrLocation++;
}
