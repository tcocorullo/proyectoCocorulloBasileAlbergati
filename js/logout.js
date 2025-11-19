function logout() {
    localStorage.removeItem("emailUsuario");
    window.location.href = "index.html";
}