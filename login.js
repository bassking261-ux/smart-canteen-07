const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("studentName").value.trim();

    const department =
        document.getElementById("department").value;

    const year =
        document.getElementById("year").value;


    if (name === "" || year === "") {

        alert("Please enter your name and select your year!");

        return;
    }


    const student = {

        name: name,

        department: department,

        year: year

    };


    localStorage.setItem(
        "student",
        JSON.stringify(student)
    );


    // Go to Home Page
    window.location.href = "home.html";

});
