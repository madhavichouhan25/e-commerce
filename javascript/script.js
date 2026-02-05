// ================================
// FILTER CATEGORY
// ================================
function filterCategory(category) {
  const products = document.querySelectorAll(".product");
  products.forEach(product => {
    product.style.display =
      category === "all" || product.dataset.category === category
        ? "block"
        : "none";
  });
}

// ================================
// ADD TO CART (with quantity)
// ================================
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart 🛒");
}

// ================================
// MAKE FUNCTIONS GLOBAL (IMPORTANT)
// ================================
window.addToCart = addToCart;
window.filterCategory = filterCategory;

// ================================
// SEARCH
// ================================
const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll(".product").forEach(product => {
      const title = product.querySelector("h3").innerText.toLowerCase();
      product.style.display = title.includes(query) ? "block" : "none";
    });
  });
}