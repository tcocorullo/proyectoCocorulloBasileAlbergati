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

const url1 = "https://dummyjson.com/products/categories"

fetch(url1)
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

const url2 = "https://dummyjson.com/products"

fetch(url2)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
    
    let productos = document.querySelector(".productos")
    for (let i = 0; i <= 14; i++) {
        productos.innerHTML +=
            `<article class="producto">
                <img src="${data.products[i].thumbnail}" alt=""/>
                <h3>${data.products[i].title}</h3>
                <p>${data.products[i].description}</p>
                <p>Precio: ${data.products[i].price}</p>
                <a href="./product.html?id=${data.products[i].id}" class="botones">Ver detalle</a>
            </article>`
    }

    let productos1 = document.querySelector(".productos1")
    for (let i = 15; i < data.products.length; i++) {
        productos1.innerHTML +=
            `<article class="producto">
                <img src="${data.products[i].thumbnail}" alt=""/>
                <h3>${data.products[i].title}</h3>
                <p>${data.products[i].description}</p>
                <p>Precio: ${data.products[i].price}</p>
                <a href="./product.html?id=${data.products[i].id}" class="botones">Ver detalle</a>
            </article>`
    }

    })