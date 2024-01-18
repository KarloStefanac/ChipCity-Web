const itemsDiv = document.getElementById('items');
const cartDiv = document.querySelector('.cart');
const buyButton = document.querySelectorAll('.buy-item');
const items = document.querySelectorAll('.item');

buyButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        const children = items[index].children;

        //create cart item elements
        const product = document.createElement('div');
        const productImage = document.createElement('img'); 
        const productDesc = document.createElement('div');
        const productName = document.createElement('p');
        const productPrice = document.createElement('p');
        const productButton = document.createElement('button');
        
        //set attributes
        productImage.setAttribute('class', 'product-image');
        productImage.setAttribute('src', children[0].children[0].src);
        productName.textContent = children[2].textContent;  
        productPrice.textContent = children[4].textContent;
        productDesc.setAttribute('class', 'product-desc');
        productButton.setAttribute('class', 'remove-product');
        productButton.textContent = 'X';

        product.setAttribute('class', 'product');

        //append elements
        productDesc.appendChild(productName);
        productDesc.appendChild(productPrice);

        product.appendChild(productImage);
        product.appendChild(productDesc);
        product.appendChild(productButton);

        cartDiv.insertBefore(product, totalPrice);

        removeItemEvent();
        getTotalPrice();
    })
})