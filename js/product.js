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

const url2 = "https://dummyjson.com/products?limit=0"

fetch(url2)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        
        let queryString = location.search;
        let queryStringObj = new URLSearchParams(queryString);
        
        let idProductoMasUno = queryStringObj.get("id")
        let idProducto = idProductoMasUno - 1
        
        let producto = document.querySelector(".menu")
        producto.innerHTML =
            `<section class="Info1producto">
                <h2>${data.products[idProducto].title}</h2>
                <section class="Imagenproducto">
                <img class="img_prod" src="${data.products[idProducto].thumbnail}" alt="Anteojos de sol Off White">
            </section>
                <h1>$${data.products[idProducto].price}</h1>
            </section>

            <section class="Info2">
                <p><strong>Marca: </strong>${data.products[idProducto].brand}</p>
                <p><strong>Descripcion: </strong>${data.products[idProducto].description}</p>
                <p><strong>Stock Disponible: </strong>${data.products[idProducto].stock}</p>
                <p><strong>Categoria: </strong>${data.products[idProducto].category}</p>
            </section>`

        let tags = document.querySelector(".menu2")
        for (let i = 0; i < data.products[idProducto].tags.length; i++)
            tags.innerHTML +=
                `<li>#${data.products[idProducto].tags[i]}</li>`
            
        let reseñas = document.querySelector(".menu1")
        for (let i = 0; i < data.products[idProducto].reviews.length; i++)
            reseñas.innerHTML +=
                `<section class="Reseñas">
                        <p class="data rating"><strong>${data.products[idProducto].reviews[i].rating}/5 Estrellas</strong></p>
                        <p class="data">${data.products[idProducto].reviews[i].date}</p>
                        <p class="data">${data.products[idProducto].reviews[i].reviewerName}</p>
                        <p class="data">${data.products[idProducto].reviews[i].comment} </p>  
                </section>`
    })
.catch(function(error){
    console.log("El error es: " + error);               //falta poner la fecha en el formato correcto y la marca
})