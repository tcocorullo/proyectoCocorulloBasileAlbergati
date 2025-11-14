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

const url = "https://dummyjson.com/products/categories"

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);

        let sidebar = document.querySelector(".lista_categorias")
        for (let i = 0; i < data.length; i++) {
            sidebar.innerHTML += `<li><a href="./category.html">${data[i].name}</a></li>`;
        }

    })
.catch(function(error){
    console.log("El error es: " + error);
})

