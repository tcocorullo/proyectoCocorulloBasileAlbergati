const barraSuperior = document.querySelector(".barra");

barraSuperior.innerHTML = `<li><a href="./index.html" class="botones">Home</a></li>`

const emailUsuario = localStorage.getItem("emailUsuario");

if (!emailUsuario) {
    barraSuperior.innerHTML += `<li><a href="./login.html" class="botones">Login</a></li>`;
    barraSuperior.innerHTML += `<li><a href="./register.html" class="botones">Registro</a></li>`;
} else {
    barraSuperior.innerHTML += `Bienvenido: ` + emailUsuario;
    barraSuperior.innerHTML += `<li><a href="#" onclick="logout()" class="botones">Logout</div></li>`;
}
