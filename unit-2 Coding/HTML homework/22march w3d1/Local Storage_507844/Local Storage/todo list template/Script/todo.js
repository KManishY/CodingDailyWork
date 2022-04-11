var todoItems = JSON.parse(localStorage.getItem("todoData"));
console.log(todoItems);

todoItems.map(function (elem) {
    console.log(elem)
    var tr = document.createElement("tr");

    var td1 = document.createElement("tr");
    td1.innerText = elem.itemName;
    var td2 = document.createElement("tr")
})