document.getElementById("submit-button").addEventListener("click", addNewQr);
document
  .getElementById("submit-batch-button")
  .addEventListener("click", batchUpload);
var qrLocation = 1;
var allSources = [];

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
function makeDownloadAllButton() {
  var downloadAllButton = document.createElement("button");
  downloadAllButton.setAttribute("id", "download-all");
  downloadAllButton.setAttribute("class", "btn btn-primary");
  downloadAllButton.setAttribute("type", " button");
  var downloadAllText = document.createTextNode("Download all");
  downloadAllButton.appendChild(downloadAllText);
  document
    .getElementById("download-all-container")
    .appendChild(downloadAllButton);

  downloadAllButton.addEventListener("click", function () {
    for (let i = 1; i < qrLocation; i++) {
      const button = document.getElementById(`qr-button-${i}`);
      button.click();
    }
  });
}
function makeQrCode(url, title, color) {
  var downloadAll = document.getElementById("download-all");
  if (downloadAll === null) {
    makeDownloadAllButton();
  }

  var card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("id", `qrcode-${qrLocation}`);
  card.setAttribute("style", "width: 18rem;");
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

  var cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  card.appendChild(cardBody);

  var titleElement = document.createElement("h5");
  titleElement.setAttribute("class", "card-title");
  titleElement.appendChild(document.createTextNode(title));
  cardBody.appendChild(titleElement);

  var bodyElement = document.createElement("p");
  bodyElement.setAttribute("class", "card-text");
  bodyElement.appendChild(document.createTextNode(url));
  cardBody.appendChild(bodyElement);

  var button = document.createElement("button");
  const currentQrLocation = qrLocation;
  button.setAttribute("id", `qr-button-${qrLocation}`);
  button.setAttribute("class", "btn btn-primary");
  button.setAttribute("type", " button");
  button.addEventListener("click", function () {
    console.log("card.children:", card.children);
    var src = card.children[1].getAttribute("src");
    var link = document.createElement("a");
    link.href = src;
    link.download = `${title}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  var text = document.createTextNode("Download");
  button.appendChild(text);
  cardBody.appendChild(button);

  qrLocation++;
}
