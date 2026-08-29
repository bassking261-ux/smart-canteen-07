const student =
    JSON.parse(localStorage.getItem("student"));

if (!student) {

    window.location.href = "index.html";

}


document.getElementById("studentWelcome").textContent =
    student.name;


document.getElementById("studentInfo").textContent =
    `${student.college} • ${student.department} • ${student.year}`;


function addToCart(name, price, image) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];


    const existing =
        cart.find(item => item.name === name);


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            name: name,
            price: price,
            image: image,
            quantity: 1

        });

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    alert(name + " added to your order!");


}
