function downloadAllButtonComponent() {
  var container = document.createElement("div");
  container.setAttribute("class", "col-2");

  var downloadAllButton = document.createElement("button");
  downloadAllButton.setAttribute("id", "download-all");
  downloadAllButton.setAttribute("class", "btn btn-primary");
  downloadAllButton.setAttribute("type", " button");
  var downloadAllText = document.createTextNode("Download all");
  downloadAllButton.appendChild(downloadAllText);

  downloadAllButton.addEventListener("click", function () {
    for (let i = 1; i < qrLocation; i++) {
      const button = document.getElementById(`qr-button-${i}`);
      button.click();
    }
  });

  container.appendChild(downloadAllButton);

  return container;
}
