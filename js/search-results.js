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
let mensajeSR = document.querySelector(".noResults")
let QueryStringSR = new URLSearchParams(location.search)
let termino=  QueryStringSR.get("query")


const form = document.querySelector(".buscadorSR");

const url2 = "https://dummyjson.com/products/search?q=" + termino

fetch(url2)
    .then(function(res) {   
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let ProductosSR = data.products
        if(ProductosSR.length == 0) {
            alert("No se han encontrado resultados relacionados al término" + termino)
        }
        let productos = document.querySelector(".productos")
        for (i = 0 ; i < data.products.length ; i++) {
            productos.innerHTML +=
            `<article class="producto">
                <img src="${data.products[i].thumbnail}" alt=""/>
                <h3>${data.products[i].title}</h3>
                <p>${data.products[i].description}</p>
                <p>Precio: ${data.products[i].price}</p>
                <a href="./product.html?id=${data.products[i].id}" class="botones">Ver detalle</a>
            </article>`
        }

    })
