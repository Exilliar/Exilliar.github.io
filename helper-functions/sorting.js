function changeSort(e) {
  sortSelected = +e.target.value;
  sortCards(sortSelected);
}

function sortCards(i) {
  var qrList = document.getElementById("qr-list");
  cards.forEach(card => {
    qrList.removeChild(card.card);
  });

  var sortFunc;

  switch (i) {
    case 0:
      sortFunc = sortByOldestFirst;
      break;
    case 1:
      sortFunc = sortByNewestFirst;
      break;
    case 2:
      sortFunc = sortByName;
      break;
    default:
      console.error("Option not supported");
      break;
  }
  cards.sort(sortFunc);

  cards.forEach(card => {
    qrList.appendChild(card.card);
  });
}

function sortByOldestFirst(a, b) {
return a.timeAdded - b.timeAdded;
}
function sortByNewestFirst(a, b) {
    return b.timeAdded - a.timeAdded;
}
function sortByName(a, b) {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
}
