function pintarProductosUI() {
    for (const cosmetico of cosmeticos) {
        $("#laFuncion").append(`
    <div class="col-4">
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
    `);
    }
}





const busqueda = document.getElementById("miBusqueda");

busqueda.onsubmit = function(event) {
    console.dir(event);
    event.preventDefault();
    console.dir(this);
    console.dir(this.children);
    buscarProducto();

}

function validarBusqueda(event) {
    event.preventDefault;
}


//buscador de productos
function buscarProducto() {
    let input = $("#filtrado").val().toLowerCase();
    $("#laFuncion").empty();
    for (const cosmetico of cosmeticos) {
        let nombreCosmetico = cosmetico.nombre.toLowerCase()
        if (nombreCosmetico.includes(input)) {
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
        `);
        }
    }
    botonComprar();
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



$(document).ready(function() {
    llamarCosmetico();
    if ("comprar" in localStorage) {
        const listaCompra = JSON.parse(localStorage.getItem("comprar"));
        for (const compra of listaCompra) {
            productoCarrito.push(compra);
        }
        pintarCarritoUI(productoCarrito);
    }
    animacionEnvios();
});

function botonComprar() {
    const botones = $('.btn-comprar');
    for (const boton of botones) {
        boton.onclick = comprar;
    }
}

function animacionEnvios() {
    primero();

    function primero() {
        $(".izquierda").animate({
            "left": "-=300px"
        }, 12000, function() {
            $(".izquierda").css("left", "2000px");
        });

        $(".derecha").animate({
            "left": "-500px"
        }, 12000, function() {
            segundo();
        });
    };

    function segundo() {
        $(".derecha").animate({
            "left": "-=300px"
        }, 12000, function() {
            $(".derecha").css("left", "2000px");
        });

        $(".izquierda").animate({
            "left": "-500px"
        }, 12000, function() {
            primero();
        });

    };
}

window.addEventListener('load', () => {
    $("#cargando").fadeIn();
    $("#cargando").fadeOut(4000);
    $("#laFuncion").hide();
    $("#laFuncion").fadeIn(4000);


})


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

function llamarCosmetico() {
    $.get(urlget, function(respuesta, estado) {
        if (estado == "success") {
            let cosme = respuesta;
            for (const dato of cosme) {
                cosmeticos.push(new Cosmetico(dato.id, dato.categoria, dato.nombre, dato.descripcion, dato.color, dato.precio, dato.imagen));
            }

        }
        pintarProductosUI();
        botonComprar();
    })
}