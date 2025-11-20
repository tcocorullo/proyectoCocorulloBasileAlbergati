let formulario = document.querySelector(".buscador");
let busqueda = document.querySelector(".inputb")

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    if (busqueda.value == "" ) {
        return alert("No ha buscado nada, ingrese un producto")
    } if (busqueda.value.length < 3) {
        return alert("El producto buscado debe tener minimo 3 caracteres")
    } else {
        this.submit()
    }
})

const form = document.querySelector(".login");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const errorEmail = document.querySelector(".error_email");
    const password = document.getElementById("contra").value;
    const errorPassword = document.querySelector(".error_password");

    errorEmail.innerHTML = "";
    errorPassword.innerHTML = "";

    if (email.length < 3) {
        errorEmail.innerHTML = "Ingrese email valido."
        return;
    }

    if (password.length === 0) {
        errorPassword.innerHTML = "Debe ingresar la password!!!"
        return;
    }

    if (password.length < 6) {
        errorPassword.innerHTML = "La longitud de la contraseña debe ser al menos 6."
        return;
    }

    // Email y password validos
    localStorage.setItem("emailUsuario", email);
    window.location.href = "index.html";

})

