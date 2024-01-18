//Event for removing movies
const totalPrice = document.querySelector(".total-price");
const getTotalPrice = () => {
    const products = document.querySelectorAll(".product");
    let total = 0;
    products.forEach((product) => {
        const children = product.children;
        let price = parseFloat(children[1].children[1].textContent);
        total += price;
    });
    totalPrice.textContent = "Total: " + total.toFixed(2) + "€";
}

const removeItemEvent = () => {
    let buttons = document.querySelectorAll(".remove-product");
    // console.log(buttons);

    let products = document.querySelectorAll(".product");
    // console.log(products);

    //Remove items
    buttons.forEach((button,index) => {
        button.addEventListener("click", () => {
            products[index].remove();
            getTotalPrice();
        })
    })
}

getTotalPrice();
removeItemEvent();

const clearCart = document.querySelector(".clearCart");
clearCart.addEventListener("click", () => {
    let products = document.querySelectorAll(".product");
    products.forEach((product) => {
        product.remove();
    })
    getTotalPrice();
})

const time = document.querySelector(".time");
const options = {year: 'numeric', month: 'long', day: 'numeric'};
time.innerHTML = new Date().toLocaleTimeString('en-GB',options);
