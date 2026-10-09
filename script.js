let cart = 0;


/* ADD TO CART */

function addToCart(productName) {

    cart++;

    document.getElementById("cartCount").innerText = cart;

    alert(
        productName +
        " has been added to your cart! 🛒"
    );
}


/* SHOW CART */

function showCart() {

    if (cart === 0) {

        alert("Your cart is empty!");

    } else {

        alert(
            "You have " +
            cart +
            " item(s) in your cart 🛒"
        );
    }
}


/* SCROLL TO PRODUCTS */

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* SEARCH */

function searchProducts() {

    let input =
        document
        .getElementById("search")
        .value
        .toLowerCase();

    let products =
        document
        .querySelectorAll(".product-card");

    products.forEach(function(product) {

        let name =
            product
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (name.includes(input)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });
}