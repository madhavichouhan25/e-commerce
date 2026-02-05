let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = document.getElementById("cart-items");
const grandTotal = document.getElementById("grand-total");

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    cartItems.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td>${item.quantity}</td>
        <td>$${itemTotal}</td>
        <td>
          <button onclick="removeItem(${index})">❌</button>
        </td>
      </tr>
    `;
  });

  grandTotal.innerText = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();