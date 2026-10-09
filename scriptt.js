// Cart counter
let cartCount = 0;


// Add product to cart
function addToCart(productName) {

    cartCount++;

    document.getElementById("cartCount").innerText = cartCount;

    alert(productName + " added to cart! 🛒");
}


// Show cart
function showCart() {

    if (cartCount === 0) {

        alert("Your cart is empty.");

    } else {

        alert(
            "You have " +
            cartCount +
            " item(s) in your cart. 🛒"
        );

    }
}


// Scroll to products
function scrollToProducts() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}