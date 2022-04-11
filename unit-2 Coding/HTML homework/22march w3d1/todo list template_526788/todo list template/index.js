

document.querySelector("form").addEventListener("submit", myfun);// step-1 


var todoArr = JSON.parse(localStorage.getItem("todoData"))||[]  //step-4
function myfun() { // step-2  
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var quantity = document.querySelector("#qty").value;
    var priority = document.querySelector("#priority").value;
    
    var todoObj = { // step-3 
        itemName: name,
        itemQty: quantity,
        itemPriority: priority,
    }
    todoArr.push(todoObj);
    localStorage.setItem("todoData",JSON.stringify(todoArr))
}
