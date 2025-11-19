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

const params = new URLSearchParams(window.location.search);
const categoria = params.get("category");

fetch("https://dummyjson.com/products/category/" + categoria)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    const listaProductos = document.querySelector(".lista_productos");
    listaProductos.innerHTML = "";

    for (let i = 0; i < data.products.length; i++) {
      const article = `
        <article class="producto">
            <img src="${data.products[i].images[0]}" alt="${data.products[i].title}">
            <h3>${data.products[i].title}</h3>
            <p>${data.products[i].description}</p>
            <p>Precio: USD ${data.products[i].price}</p>
            <a href="product.html?product=${data.products[i].id}"" class="botones">Ver detalle</a>
        </article>    
      `
      // TODO: REVISAR QUE EL QUERYSTRING (?product) SEA EL MISMO NOMBRE USADO EN LA PAGINA DE PRODUCT.HTML
      listaProductos.innerHTML += article;
    }
  })


