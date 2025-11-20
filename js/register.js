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


let formulario2 = document.querySelector(".register");     
let email = document.querySelector(".email_register"); 
let contraseña = document.querySelector(".contra_register"); 
let contraseña2 = document.querySelector(".contra_register2"); 

formulario2.addEventListener('submit', function(event) {
    event.preventDefault();      
    if (email.value == "" ) {   
        return alert("Email inválido, intente nuevamente")
    } if (contraseña.value == "") {
        return alert("Contraseña vacía, escriba su contraseña nuevamente")

    } if (contraseña.value.length < 6) {
        return alert("La contraseña necesita tener al menos 6 caracteres")

    } if (contraseña2.value != contraseña.value) {
        return alert("Las contraseñas no coinciden, confirme la contraseña nuevamente")

    } else {
        this.submit()
}})