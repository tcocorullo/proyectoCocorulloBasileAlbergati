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
            sidebar.innerHTML += `<li><a href="./category.html?category=${data[i].slug}&nombre=${data[i].name}">${data[i].name}</a></li>`;
        }

    })
.catch(function(error){
    console.log("El error es: " + error);
})

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("category");
let nombre = queryStringObj.get("nombre");

fetch("https://dummyjson.com/products/category/" + categoria)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {

    let titulo = document.querySelector("#titulo")
    titulo.innerText = nombre

    const listaProductos = document.querySelector(".productos");
    listaProductos.innerHTML = "";
    let article = ""
    for (let i = 0; i < data.products.length; i++) {
      article += `
        <article class="producto">
            <img src="${data.products[i].images[0]}" alt="${data.products[i].title}">
            <h3>${data.products[i].title}</h3>
            <p>${data.products[i].description}</p>
            <p>Precio: USD ${data.products[i].price}</p>
            <a href="./product.html?id=${data.products[i].id}" class="botones">Ver detalle</a>
        </article>    
      `
    }
    listaProductos.innerHTML += article;
  })
.catch(function(error){
    console.log("El error es: " + error);
})

