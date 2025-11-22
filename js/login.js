let form = document.getElementById("loginForm");
form.addEventListener("submit", function (e) {
    e.preventDefault()
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (!email.includes("@")) {
        alert("Email must contain @");
        return;
    }


    let storedUser = localStorage.getItem("user");
    if (!storedUser) {
        alert("No account found. Please signup first.");
        return;
    }
    storedUser = JSON.parse(storedUser);

    if (email === storedUser.email && password === storedUser.password) {
        alert("Login successful!");

    } else {
        alert("Account not found or wrong credentials. Please signup first.");
    };

    form.reset();

});