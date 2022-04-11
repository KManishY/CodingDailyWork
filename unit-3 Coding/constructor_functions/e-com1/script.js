function Student(n, c,i,p,g,s) {
  this.name = n;
  this.category = c;
  this.image = i;
  this.price = p;
  this.gender = g;
  this.sold = s;
  
}
document.querySelector("#add").addEventListener("click", storeProducts);
let arr =JSON.parse(localStorage.getItem("Products")) ||  [];
function storeProducts(e) {
  e.preventDefault();

  let form = document.getElementById("form");

  let name = form.name.value;

  let category = form.category.value;
  let image = form.image.value;
  
  let price = form.price.value;
  let gender = form.gender.value;
  let sold = form.sold.value; 


  let p1 = new Student(name, category,image, price,gender, sold );

  arr.push(p1);
  // console.log("arr:", arr);
  localStorage.setItem("Products", JSON.stringify(arr));
}