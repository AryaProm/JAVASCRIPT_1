const products = [
  {
    name: "Wireless Mouse",
    image: "https://5.imimg.com/data5/ECOM/Default/2022/7/CP/SE/QE/3219025/81pbkcie0ml-sl1500-500x500.jpg",
    description: "A sleek wireless mouse for all your computing needs.",
    price: "$25.99",
    rating: 4.5, // Rating out of 5
    stock: 20, // Number of items available in stock
  },
  {
    name: "Bluetooth Headphones",
    image: "https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg",
    description:
      "Noise-cancelling Bluetooth headphones with great sound quality.",
    price: "$59.99",
    rating: 4.7,
    stock: 50,
  },
  {
    name: "Smartphone Stand",
    image: "https://m.media-amazon.com/images/I/61vuhpnlm4L.jpg",
    description: "Adjustable stand for all smartphones and tablets.",
    price: "$15.99",
    rating: 4.3,
    stock: 35,
  },
  {
    name: "Electric Kettle",
    image: "https://www.milton.in/cdn/shop/files/Vienna_electric_kettle_1.jpg?v=1736933946&width=900",
    description: "Stainless steel electric kettle for quick boiling.",
    price: "$35.00",
    rating: 4.8,
    stock: 15,
  },
];

const productContainer = document.getElementById("product-container");

products.forEach(products => {
  console.log(products.image)
})

// Loop through each product and create HTML
products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

function addToCart() {
    const cart = document.getElementById("cart");
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="cart-item-info">
                <h4>${product.name}</h4>
                <p>${product.price}</p>
            </div>
            <div class="cart-item-quantity">
                <input type="number" value="1" min="1" max="${product.stock}">
                <button class="button" onclick="removeFromCart()">Remove</button>
            </div>
        `;
    cart.appendChild(cartItem);
}
  productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">${product.price}</div>
        <div class="rating">Rating: ${product.rating} stars</div>
        <div class="stock">In stock: ${product.stock} items</div>
        <select name="cars" id="cars">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        <button class="button" onclick = "addToCart()">Add to Cart</button>
    `;

  productContainer.appendChild(productDiv);
});
