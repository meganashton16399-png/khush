let products = {
  1: { name:"Frog Knit Scarf 🐸", price:800 },
  2: { name:"Floral Crochet Hairband", price:299 }
};

let cart = [];
let current;

function openProduct(id){
  current = products[id];
  document.getElementById("pName").innerText = current.name;
  document.getElementById("pPrice").innerText = "₹" + current.price;
  document.getElementById("pDesc").innerText = "Handmade acrylic yarn product.";
  document.getElementById("productModal").style.display="flex";
}

function closeProduct(){
  document.getElementById("productModal").style.display="none";
}

function addToCart(){
  cart.push(current);
  document.getElementById("cart-count").innerText = cart.length;
  closeProduct();
}

function openCart(){
  document.getElementById("cartDrawer").classList.add("open");
  renderCart();
}

function closeCart(){
  document.getElementById("cartDrawer").classList.remove("open");
}

function renderCart(){
  let html="", total=0;
  cart.forEach(p=>{
    html+=`<p>${p.name} – ₹${p.price}</p>`;
    total+=p.price;
  });
  document.getElementById("cartItems").innerHTML = html || "No products in cart.";
  document.getElementById("cartTotal").innerText = "Total: ₹"+(total+100);
}