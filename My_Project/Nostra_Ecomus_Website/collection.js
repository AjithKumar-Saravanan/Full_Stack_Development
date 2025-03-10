var ProductContainer = document.getElementById("product");
var Search = document.getElementById("search");
var ProductList = ProductContainer.querySelectorAll("div");

Search.addEventListener("keyup", function (event) {
    var enteredvalue = event.target.value.toUpperCase();

    for (let count = 0; count < ProductList.length; count++) {
        var ProductName = ProductList[count].querySelector("p").textContent;

        if (ProductName.toUpperCase().indexOf(enteredvalue) < 0) {
            ProductList[count].style.display = "none";
        } else {
            ProductList[count].style.display = "block";
        }
    }
});

