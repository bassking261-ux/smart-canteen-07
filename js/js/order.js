let cart =
    JSON.parse(localStorage.getItem("cart")) || [];


const orderItems =
    document.getElementById("orderItems");


function displayCart() {

    orderItems.innerHTML = "";

    if (cart.length === 0) {

        orderItems.innerHTML = `
            <div class="empty">
                <h2>Your order is empty 😔</h2>
                <a href="home.html">
                    Go to Menu
                </a>
            </div>
        `;

        document.getElementById("totalAmount")
            .textContent = "₹0";

        return;

    }


    let total = 0;


    cart.forEach((item, index) => {

        total += item.price * item.quantity;


        const div =
            document.createElement("div");

        div.className = "order-item";


        div.innerHTML = `

            <div class="order-food">

                <span class="order-emoji">
                    ${item.image}
                </span>

                <div>

                    <h3>${item.name}</h3>

                    <p>
                        ₹${item.price} ×
                        ${item.quantity}
                    </p>

                </div>

            </div>


            <strong>
                ₹${item.price * item.quantity}
            </strong>


            <button
                onclick="removeItem(${index})">

                ✕

            </button>

        `;


        orderItems.appendChild(div);

    });


    document.getElementById("totalAmount")
        .textContent = "₹" + total;

}


function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();

}


function placeOrder() {

    if (cart.length === 0) {

        alert("Please add food first!");

        return;

    }


    let total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );


    const token =
        "SB" +
        Math.floor(
            1000 + Math.random() * 9000
        );


    const order = {

        token: token,

        items: cart,

        total: total,

        pickup:
            document.getElementById("pickupTime").value,

        date:
            new Date().toLocaleString(),

        status: "Preparing"

    };


    let orders =
        JSON.parse(localStorage.getItem("orders"))
        || [];


    orders.push(order);


    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );


    localStorage.setItem(
        "cart",
        JSON.stringify([])
    );


    alert(
        `Order placed successfully! 🎉\n\nYour Token: ${token}`
    );


    window.location.href =
        "account.html";

}


displayCart();
