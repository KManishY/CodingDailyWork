var todoItem = JSON.parse(localStorage.getItem("todoData"));
console.log(todoItem);


var completed = JSON.parse(localStorage.getItem("completeTodo")) || [];

todoItem.map(function (elem, index) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = elem.itemName;
    var td2 = document.createElement("td");
    td2.innerText = elem.itemQty;
    var td3 = document.createElement("td");
    td3.innerText = elem.itemPriority;
    var td4 = document.createElement("td");
    
    
    
    td4.textContent = "Completed";
    td4.style.color = "red";
    td4.style.cursor = "pointer";
    td4.addEventListener("click", function () {
        // td4.innerText = "completed";
        markCompleteFunction(elem, index);
    });



    tr.append(td1, td2, td3, td4);
    document.querySelector("#body").append(tr);
})


function markCompleteFunction(elem, index) {
    completed.push(elem);
    localStorage.setItem("completeTodo", JSON.stringify(completed));
}