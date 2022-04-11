document.querySelector("form").addEventListener("submit", electricItem);

function electricItem() {
    event.preventDefault();
    var productCategory = document.querySelector("#category").value
    var productTitle = document.querySelector("#name").value
    var productPrice = document.querySelector("#price").value

    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.innerText = productCategory;
    var td2 = document.createElement("td")
    td2.innerText = productTitle;
    var td3 = document.createElement("td")
    td3.innerText = productPrice;
    
    tr.append(td1, td2, td3);
    document.querySelector("thead").append(tr);

    

}