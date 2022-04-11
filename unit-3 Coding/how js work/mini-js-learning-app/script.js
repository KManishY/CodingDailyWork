const s = document
   .querySelector("#scope");

s.addEventListener("click", () => {
   var box = document.querySelector(".text");
   var div = document.createElement("div");
   // var ul = document.createElement("ul")
   var arr = ['hello', 'world', 3, 5];
   arr.map(function (e) {
      box.innerHTML = "";
      var p = document.createElement("li");
      p.innerHTML = e
      // console.log(e)
      div.append(p);
      

   })
   box.append(div);
});

const t = document.querySelector("#hosting");

t.addEventListener("click", () => {
   var box = document.querySelector(".next");
  var div = document.createElement("div");
  // var ul = document.createElement("ul")
  var arr = [1, 5, 4, 5];
   arr.forEach(function (e) {
      box.innerHTML = "";
    var p = document.createElement("li");
    p.innerHTML = e;
    // console.log(i)
    div.append(p);
  });
   box.append(div);
});
  