// console.log('hi');
//what is veriable
// ans:variable is a storage
// 0:-> does veraible
// it show information
// 1.- data type(primitive and non-primitive)




// const arr = [1, 2, 3];


// function a() {
   
//    var arr = [1,2,4]
// }
// console.log(arr)




// What is Null in JavaScript

// var a = 23;
// // console.log(a)
// a = null;
// console.log(a);


// function nikeProduct() {
//    let obj = {}
//    obj.name = n;
//    obj.price = p;
//    return obj

// }



// function nikeProduct(n,p) {
//    this.name = n;
//    this.price = p;
// }
// let p1 =new nikeProduct('shoes', 200)
// console.log('p1:', p1)



// --------------------------------------------------------------------------------

//create ecomerce product


//create a form to accept value





// let arr = [];


// function product(n,p,b) {
//    this.name = n;
//    this.price = p;
//    this.brand = b;
// }

// function storeProducts(e) {

//    event.preventDefault();

//    let form = document.getElementById("products")
//    let name = form.name.value
//    console.log(name)
//    let price = form.price.value
//    console.log(price)
//    let brand = form.brand.value
//    console.log(brand)


//    let p1 = new product(name, price, brand)
//    arr.push(p1);
//    console.log(arr)
// }



// -------------------------------------------------------------------

// Call , Apply ,Bind

// let kitchen = {
//    name: 'kitchen',
//    purpose: 'cook',
//    cookFood: function (order) {
//       console.log(`serving ${order} in ${this.name}`)
//    },
// }
// 1

// let living_room = {
//    name:'living_room',
//    purpose:'watchingtv',
// }

// let bedroom = {
//    name: 'bedroom',
//    purpose:'sleep',
// }

// kitchen.cookFood('meggi'); // this-> kitchen

// // this -> living_room
// //we are trying to change the owner object
// kitchen.cookFood.call(living_room,'samosa');
// kitchen.cookFood.call(bedroom, "samosa");



//how js work

var a = 20;
var b = a;
b = 10;
console.log('b: ', b);

var c = {name: 'manish'}
console.log('c: ', c); 
