function sortBySelectComponent(options /* options: string[] */, changeFunc) {
    var sortDiv = document.createElement("div");
    // sortDiv.setAttribute("class", "col");
    sortDiv.setAttribute("style", "max-width: 10rem;");
    var sort = document.createElement("select");
    sort.setAttribute("class", "form-select");
    options.forEach((option, i) => {
        var o = document.createElement("option");
        o.setAttribute("value", i);
        if (i === 0) {
            o.setAttribute("selected", true);
        }
        o.appendChild(document.createTextNode(option));
        sort.appendChild(o);
    });

    sort.addEventListener("change", changeFunc);

    sortDiv.appendChild(sort);

    return sortDiv;
}