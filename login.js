const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const studentName =
        document.getElementById("studentName").value.trim();

    const college =
        document.getElementById("college").value.trim();

    const department =
        document.getElementById("department").value;

    const year =
        document.getElementById("year").value;

    if (!studentName || !college || !department || !year) {
        alert("Please fill all details!");
        return;
    }

    const student = {
        name: studentName,
        college: college,
        department: department,
        year: year
    };

    localStorage.setItem(
        "student",
        JSON.stringify(student)
    );

    window.location.href = "home.html";

});
