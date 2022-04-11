document.querySelector("#form").addEventListener("submit", myFunction);

var todoList = [];
function myFunction() {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var quantity = document.querySelector("#qty").value;
  var prior = document.querySelector("#priority").value;

  var todoObj = {
    itemName: name,
    itemQty: quantity,
    itemPrior: prior,
  };
  //console.log(todoObj);
  todoList.push(todoObj);
  console.log(todoList);

  localStorage.setItem("todoData", JSON.stringify(todoList));
}
