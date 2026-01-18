let products = {
  1: {
    name: "Frog Knit Scarf 🐸",
    price: 800,
    img: "assets/frog-scarf.jpg",
    desc: "Handmade acrylic yarn scarf. Free size. Aesthetic accessory. Hand wash only."
  },
  2: {
    name: "Floral Crochet Hairband",
    price: 299,
    img: "assets/hairband.jpg",
    desc: "Stretchable handmade crochet hairband. One size fits all. Everyday wear."
  }
};

let cart = [];
let currentProduct = null;

function openProduct(id) {
  currentProduct = products[id];
  document.getElementById("modalImg").src = currentProduct.img;
  document.getElementById("modalTitle").innerText = currentProduct.name;
  document.getElementById("modalPrice").innerText = "₹" + currentProduct.price;
  document.getElementById("modalDesc").innerText = currentProduct.desc;
  document.getElementById("productModal").style.display = "flex";
}

function closeProduct() {
  document.getElementById("productModal").style.display = "none";
}

function zoomImage() {
  window.open(currentProduct.img, "_blank");
}

function addToCart() {
  cart.push(currentProduct);
  document.getElementById("cart-count").innerText = cart.length;
  closeProduct();
}

function goToCheckout() {
  if (cart.length === 0) return alert("Cart is empty");
  document.getElementById("checkout").classList.remove("hidden");

  let html = "";
  let total = 0;

  cart.forEach(p => {
    html += `<p>${p.name} - ₹${p.price}</p>`;
    total += p.price;
  });

  document.getElementById("checkout-items").innerHTML = html;
  document.getElementById("totalAmount").innerText =
    "Total: ₹" + (total + 100);
}

function fakePay() {
  alert("Fake payment successful 💗\nReal gateway coming soon.");
}