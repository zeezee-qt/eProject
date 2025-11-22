let form = document.getElementById("signupForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmPassword").value;
    console.log(name, email, password, confirmpassword);

    if (!email.includes("@")) {
        alert("Email must contain @");
        return;
    }
    if (password.length < 6) {
        alert("please enter strong password");
        return;
    }
    if (password !== confirmpassword) {
        alert("password does not match");
        return;
    }

    // Only run this after validation passes
    let userdata = {
        name: name,
        email: email,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(userdata));
    alert('Signup Successful');

    form.reset();

});

// localStorage.removeItem("user")