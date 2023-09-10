function QRCardDownloadButtonComponent(card, title) {
  var button = document.createElement("button");
  button.setAttribute("id", `qr-button-${qrLocation}`);
  button.setAttribute("class", "btn btn-primary");
  button.setAttribute("type", " button");
  button.addEventListener("click", function () {
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

  return button;
}
