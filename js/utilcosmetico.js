function cosmeticosCategoria(categoria) {
    const cosmeticosFiltados = cosmeticos.filter(cosmetico => cosmetico.categoria == categoria)
    for (const cosmetico of cosmeticosFiltados) {
        $("#laFuncion").append(`<div class=" col-lg-4">
                <div class="card">
            <img src=${cosmetico.imagen} class="card-img-top trans imagenContenedor bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" alt="cosmetico">
                    <div class="card-body">
                    <h5 class="card-title">${cosmetico.nombre}</h5>
                    <p class="card-text">${cosmetico.descripcion}</p>
                    <p class="card-text">${cosmetico.color}</p>
                    <h2 class="card-title"> Precio $ ${cosmetico.precio} </h2> 
                    <a href="#" id="${cosmetico.id}" class="btn btn-primary btn-comprar">Comprar</a>
                    </div>
                </div>
            </div>
            <br>
            `)


    }
    clickBotones();
}

$(document).ready(function() {
    if ("comprar" in localStorage) {
        const listaCompra = JSON.parse(localStorage.getItem("comprar"));
        for (const compra of listaCompra) {
            productoCarrito.push(compra);
        }
        pintarCarritoUI(productoCarrito);
    }
});

function buscarProducto(categoria) {
    let input = $("#filtrado").val().toLowerCase();
    $("#laFuncion").empty();
    for (const cosmetico of cosmeticos) {
        let nombreCosmetico = cosmetico.nombre.toLowerCase()
        let cat = cosmetico.categoria;
        if (nombreCosmetico.includes(input) && cat == categoria) {
            $("#laFuncion").append(`<div class=" col-lg-4">
            <div class="card">
        <img src=${cosmetico.imagen} class="card-img-top trans imagenContenedor bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" alt="cosmetico">
                <div class="card-body">
                <h5 class="card-title">${cosmetico.nombre}</h5>
                <p class="card-text">${cosmetico.descripcion}</p>
                <p class="card-text">${cosmetico.color}</p>
                <h2 class="card-title"> Precio $ ${cosmetico.precio} </h2> 
                <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>
        <br>
        `);
        }
    }
    if ($("#laFuncion").is(':empty')) {
        $("#laFuncion").append(`
        <div class="card-group col-4">
            <div class="card col-md contenedorPrincipal">
                <img src="https://www.tuenlinea.com/wp-content/uploads/2018/08/Los-gatitos-m%C3%A1s-tiernos-que-derretir%C3%A1n-tu-coraz%C3%B3n.jpg" alt="gato">
                <p>${mensajeError}</p>
            </div>
        </div>
        <br>
        `);
    }

}

function clickBotones() {
    const botones = $('.btn-comprar');
    for (const boton of botones) {
        boton.onclick = comprar;
    }
}

function comprar(e) {
    e.preventDefault();
    const cosmeticoId = e.target.id;
    const agregado = cosmeticos.find(cosmetico => cosmetico.id == cosmeticoId);
    productoCarrito.push(agregado);
    //guardar en el storage
    localStorage.setItem("comprar", JSON.stringify(productoCarrito));
    pintarCarritoUI(productoCarrito);
}


function eliminarCosmetico(e) {
    e.preventDefault();
    let posicion = productoCarrito.findIndex(cosmeticos => cosmeticos.id == e.target.id);
    delete productoCarrito[posicion];
    productoCarrito.splice(posicion, 1);
    pintarCarritoUI(productoCarrito);
    localStorage.setItem("comprar", JSON.stringify(productoCarrito));
}


function pintarCarritoUI(cosmeticos) {
    $("#notificacionCarrito").html(cosmeticos.length);
    $("#productosCarrito").empty();
    for (const cosmetico of cosmeticos) {
        $("#productosCarrito").append(`<img src="${cosmetico.imagen}" class="imgCar" alt=""><p>${cosmetico.nombre} <span class="badge badge-pill badge-dark">$ ${cosmetico.precio}</span><a href="#" id="${cosmetico.id}" class="btn btn-danger btn-eliminar">x</a>
        </p>`);
    }
    $('.btn-eliminar').on('click', eliminarCosmetico);
    $(".dropdown-menu").click(function(e) {
        e.stopPropagation();
    });
}