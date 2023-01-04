if (document.getElementById("forgotPassword") != null) {
  document
    .getElementById("forgotPassword")
    .addEventListener("click", function (e) {
      const element = document.querySelector("#forgot_password_form");
      if (element.classList.contains("d-none")) {
        element.classList.remove("d-none");
        element.classList.add("d-block");
      }
    });
}
