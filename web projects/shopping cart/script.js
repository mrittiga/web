let cart = [];

function addToCart(name, price) {
    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    let cartTable = document.getElementById("cartItems");
    let totalPrice = 0;
    cartTable.innerHTML = "";

    cart.forEach((item, index) => {
        let total = item.price * item.quantity;
        totalPrice += total;

        let row = `
            <tr>
                <td>${item.name}</td>
                <td>₹${item.price}</td>
                <td>
                    <button onclick="changeQuantity(${index}, -1)">➖</button>
                    ${item.quantity}
                    <button onclick="changeQuantity(${index}, 1)">➕</button>
                </td>
                <td>₹${total}</td>
                <td><button class="delete-btn" onclick="removeFromCart(${index})">❌</button></td>
            </tr>
        `;

        cartTable.innerHTML += row;
    });

    document.getElementById("totalPrice").innerText = totalPrice;
}

function changeQuantity(index, change) {
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
