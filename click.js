function togglePasswordVisibility() {
    var passwordInput = document.getElementById("passwordInput");
    var eyeIcon = document.getElementById("eyeIcon");


    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "images/visibility.png";
        eyeIcon.width = 24;
        eyeIcon.height = 24;
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "images/visible.png";
        eyeIcon.width = 24;
        eyeIcon.height = 24;
    }
}
