function downloadAllButtonComponent() {
  var downloadAllButton = document.createElement("button");
  downloadAllButton.setAttribute("id", "download-all");
  downloadAllButton.setAttribute("class", "btn btn-primary");
  downloadAllButton.setAttribute("type", " button");
  var downloadAllText = document.createTextNode("Download all");
  downloadAllButton.appendChild(downloadAllText);

  return downloadAllButton;
}
