function QRCardBodyComponent(card, title, url) {
  var cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  var titleElement = document.createElement("h5");
  titleElement.setAttribute("class", "card-title");
  titleElement.appendChild(document.createTextNode(title));
  cardBody.appendChild(titleElement);

  var bodyElement = document.createElement("p");
  bodyElement.setAttribute("class", "card-text");
  bodyElement.appendChild(document.createTextNode(url));
  cardBody.appendChild(bodyElement);

  var button = QRCardDownloadButtonComponent(card, title);
  cardBody.appendChild(button);

  return cardBody;
}
