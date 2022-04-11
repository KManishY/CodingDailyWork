


var data = [
  {
    imgUrl:
      "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
    name: "LATEST MEN’S SNEAKER",
    price: "$25.00",
    strikedOffPrice: "$95.00",
  },
  {
    imgUrl:
      "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
    name: "LATEST MEN’S SNEAKER",
    price: "$35.00",
    strikedOffPrice: "$100.00",
  },
  {
    imgUrl:
      "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
    name: "LATEST MEN’S SNEAKER",
    price: "$35.00",
    strikedOffPrice: "$100.00",
  },
  {
    imgUrl:
      "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi4.jpg.pagespeed.ic.kmiQW8I5wx.webp",
    name: "LATEST MEN’S SNEAKER",
    price: "$35.00",
    strikedOffPrice: "$100.00",
  },
]


data.map(function (el) {
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.src=el.imgUrl;

    var name = document.createElement("p");
    name.innerText = el.name;

    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "innerDiv");

    var price = document.createElement("p");
    price.innerText = el.price;
    
    var strikedOffPrice = document.createElement("p");
    strikedOffPrice.innerText = el.strikedOffPrice;
    strikedOffPrice.style.textDecoration="line-through"

    priceDiv.append(price, strikedOffPrice);

    div.append(img, name, priceDiv);
    document.querySelector("#container").append(div);



})




