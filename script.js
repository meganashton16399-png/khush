function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
  const cart = getCart();
  cart.push(productId);
  saveCart(cart);
  updateCartCount();
  alert("Added to cart");
}

function updateCartCount() {
  const cart = getCart();
  const el = document.getElementById("cart-count");
  if (el) el.innerText = cart.length;
}

function loadProductPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = PRODUCTS[id];

  if (!product) return;

  document.getElementById("p-img").src = product.image;
  document.getElementById("p-name").innerText = product.name;
  document.getElementById("p-price").innerText = "₹" + product.price;
  document.getElementById("p-desc").innerText = product.description;

  const washList = document.getElementById("wash-care");
  product.washCare.forEach(step => {
    const li = document.createElement("li");
    li.innerText = step;
    washList.appendChild(li);
  });

  document
    .getElementById("add-cart-btn")
    .addEventListener("click", () => addToCart(id));
}

function loadCartPage() {
  const cart = getCart();
  const list = document.getElementById("cart-items");
  let subtotal = 0;

  cart.forEach(id => {
    const p = PRODUCTS[id];
    subtotal += p.price;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${p.image}">
      <div>
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
      </div>
    `;
    list.appendChild(div);
  });

  document.getElementById("subtotal").innerText = "₹" + subtotal;
  document.getElementById("total").innerText = "₹" + (subtotal + 100);
}

document.addEventListener("DOMContentLoaded", updateCartCount);