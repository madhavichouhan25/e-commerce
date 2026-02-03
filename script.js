// Category filtering
function filterCategory(category) {
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    if(category === 'all' || product.dataset.category === category) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

// Search functionality
const searchInput = document.getElementById('search');
if(searchInput){
  searchInput.addEventListener('keyup', function() {
    const query = searchInput.value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
      const title = product.querySelector('h3').textContent.toLowerCase();
      if(title.includes(query)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
}

// Simple cart system (using localStorage)
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({name, price});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + " added to cart!");
}

// Display cart items on cart.html
const cartDiv = document.getElementById('cart-items');
if(cartDiv){
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartDiv.innerHTML = "";
  if(cart.length === 0){
    cartDiv.innerHTML = "<p>Your cart is empty</p>";
  } else {
    let total = 0;
    cart.forEach(item => {
      cartDiv.innerHTML += `<p>${item.name} - $${item.price}</p>`;
      total += item.price;
    });
    cartDiv.innerHTML += `<hr><p>Total: $${total}</p>`;
  }
}

// Checkout
function checkout(){
  localStorage.removeItem('cart');
  alert("Thank you for your purchase!");
  location.reload();
}
