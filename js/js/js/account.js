const student =
    JSON.parse(localStorage.getItem("student"));


if (!student) {

    window.location.href =
        "index.html";

}


document.getElementById("name")
    .textContent = student.name;


document.getElementById("college")
    .textContent =
    "🏫 " + student.college;


document.getElementById("department")
    .textContent =
    "📚 " + student.department;


document.getElementById("year")
    .textContent =
    "🎓 " + student.year;


function loadAccount() {

    const orders =
        JSON.parse(
            localStorage.getItem("orders")
        ) || [];


    const kadan =
        Number(
            localStorage.getItem("kadan")
        ) || 0;


    const totalSpent =
        orders.reduce(
            (sum, order) =>
                sum + order.total,
            0
        );


    document.getElementById("orderCount")
        .textContent = orders.length;


    document.getElementById("totalSpent")
        .textContent =
        "₹" + totalSpent;


    document.getElementById("kadan")
        .textContent =
        "₹" + kadan;


    document.getElementById("kadanLarge")
        .textContent =
        "₹" + kadan;


    displayOrders(orders);

}


function displayOrders(orders) {

    const container =
        document.getElementById(
            "recentOrders"
        );


    container.innerHTML = "";


    if (orders.length === 0) {

        container.innerHTML = `
            <div class="empty">
                <h3>No orders yet</h3>

                <a href="home.html">
                    Order Food
                </a>
            </div>
        `;

        return;

    }


    orders.slice().reverse().forEach(order => {

        const div =
            document.createElement("div");


        div.className =
            "recent-order";


        div.innerHTML = `

            <div>

                <strong>
                    ${order.token}
                </strong>

                <p>
                    ${order.date}
                </p>

                <small>
                    ${order.status}
                </small>

            </div>


            <strong>
                ₹${order.total}
            </strong>

        `;


        container.appendChild(div);

    });

}


function addKadan() {

    let kadan =
        Number(
            localStorage.getItem("kadan")
        ) || 0;


    kadan += 50;


    localStorage.setItem(
        "kadan",
        kadan
    );


    loadAccount();


}


function clearKadan() {

    localStorage.setItem(
        "kadan",
        0
    );


    loadAccount();

}


loadAccount();
