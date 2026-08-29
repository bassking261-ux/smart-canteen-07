const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const student = {

        name: document.getElementById("studentName").value,
        college: document.getElementById("college").value,
        department: document.getElementById("department").value,
        year: document.getElementById("year").value

    };

    localStorage.setItem(
        "student",
        JSON.stringify(student)
    );

    window.location.href = "home.html";

});
