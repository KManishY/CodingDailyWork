var products = JSON.parse(localStorage.getItem("Products"));

products.map(function (e,i) {
   var div = document.createElement("div");
   var image = document.createElement("img");
   image.src = e.image;
   var name = document.createElement("h5");
   name.textContent = e.name;
   var category = document.createElement("p");
   category.textContent = e.category;
   var price = document.createElement("p");
   price.textContent = e.price;
   var sold = document.createElement("p");
   sold.textContent = e.sold;
   if (sold.innerText == "false") {
      sold.style.color = "white";
      sold.style.backgroundColor = "green";
      sold.innerText="UnSold"
   }
   else {
      sold.style.color = "white"
      sold.innerText = "SOLD";
      sold.style.backgroundColor = "red";
   }
   var remove = document.createElement("button");
   remove.innerText = 'Remove'
   remove.addEventListener("click", function () {
      removeItem(e,i)
   })
   div.append(image, name, category, price,sold,remove);
   document.querySelector("#counter").append(div);

})

function removeItem(e, i) {
   console.log("hi")
   products.splice(e,i, 1);
}