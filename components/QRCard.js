function QRCardComponent() {
  var card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("id", `qrcode-${qrLocation}`);
  card.setAttribute("style", "width: 18rem;");

  return card;
}
