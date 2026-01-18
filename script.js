function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
  const el = document.getElementById("cart-count");
  if (el) el.innerText = getCart().length;
}

function addToCart(id) {
  const cart = getCart();
  cart.push(id);
  saveCart(cart);
  updateCartCount();
  alert("Added to cart");
}

function loadProductPage() {
  const id = new URLSearchParams(window.location.search).get("id");
  const p = PRODUCTS[id];
  if (!p) return;

  document.getElementById("p-img").src = p.image;
  document.getElementById("p-name").innerText = p.name;
  document.getElementById("p-price").innerText = "₹" + p.price;
  document.getElementById("p-desc").innerText = p.description;

  const list = document.getElementById("wash-care");
  p.washCare.forEach(step => {
    const li = document.createElement("li");
    li.innerText = step;
    list.appendChild(li);
  });

  document
    .getElementById("add-cart-btn")
    .addEventListener("click", () => addToCart(id));
}

function loadCartPage() {
  const cart = getCart();
  let subtotal = 0;
  const wrap = document.getElementById("cart-items");

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
    wrap.appendChild(div);
  });

  document.getElementById("subtotal").innerText = "₹" + subtotal;
  document.getElementById("total").innerText = "₹" + (subtotal + 100);
}

function goBack() {
  window.history.back();
}

function openSearch() {
  document.getElementById("searchOverlay").style.display = "flex";
}

function closeSearch() {
  document.getElementById("searchOverlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", updateCartCount);