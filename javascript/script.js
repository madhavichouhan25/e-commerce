/* =========================
   PRODUCT FILTER
========================= */
window.filterCategory = (category) => {
  const products = document.querySelectorAll(".product-card");
  const buttons = document.querySelectorAll(".filter-btn");

  // active button
  buttons.forEach(btn => {
    btn.classList.remove("active");
    if (btn.innerText.toLowerCase() === category.toLowerCase()) {
      btn.classList.add("active");
    }
  });

  // show / hide products
  products.forEach(product => {
    const productCategory = product.getAttribute("data-category");
    if (category === "all" || productCategory === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};


/* =========================
   SEARCH FUNCTIONALITY
========================= */
const searchInput = document.getElementById("search");

if (searchInput) {
  searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
      const title = product.querySelector("h3").innerText.toLowerCase();
      product.style.display = title.includes(value) ? "block" : "none";
    });
  });
}


/* =========================
   ADD TO CART LOGIC
========================= */
window.addToCart = (name, price) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart 🛒`);
  updateCartCounter();
};


/* =========================
   CART COUNTER (HEADER)
========================= */
function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartLink = document.getElementById("cart-link");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cartLink) {
    cartLink.innerHTML = `<i class="fas fa-shopping-basket"></i> Cart (${totalItems})`;
  }
}


/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {
  updateCartCounter();
});