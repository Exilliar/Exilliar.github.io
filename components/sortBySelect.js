function sortBySelectComponent(options /* options: string[] */) {
    var sortDiv = document.createElement("div");
    sortDiv.setAttribute("class", "col-2")
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

    sortDiv.appendChild(sort);

    return sortDiv;
}