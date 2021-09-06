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
                    <a href="producto.html" id="${cosmetico.id}" class="btn btn-color btn-mostrar btn-primary">Detalles</a>
                    <a href="#" id="${cosmetico.id}" class="btn btn-color btn-primary btn-comprar">Comprar</a>
                    </div>
                </div>
            </div>
            <br>
            `)


    }
    clickBotones();
    botonMostrar();
}



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
                <a href="producto.html" id="${cosmetico.id}" class="btn btn-color btn-mostrar btn-primary">Detalles</a>
                <a href="#" id="${cosmetico.id}" class="btn btn-color btn-primary btn-comprar">Comprar</a>
                </div>
            </div>
        </div>
        <br>
        `);
        }

    }
    clickBotones();
    botonMostrar();
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

function botonMostrar(){
    const botones = $('.btn-mostrar');
    for (const boton of botones){
        boton.onclick= obtener;
    }
}

function obtener(e){
    const cosmeticoId = e.target.id;
    const agregado = cosmeticos.find(cosmetico => cosmetico.id == cosmeticoId);
    //guardar en el storage
    localStorage.setItem('cosmetico',JSON.stringify (agregado));
    

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
        $("#productosCarrito").append(`<div class="container-fluid">
        <img src="${cosmetico.imagen}" class="imgCar" alt="">
        <p>${cosmetico.nombre} 
        <span class="badge badge-pill badge-dark">$ ${cosmetico.precio}</span>
        <span class="badge badge-pill badge-dark"> ${cosmetico.cantidad}</span>
        <span class="badge badge-pill badge-dark">$ ${subtotal(cosmetico)}</span>
        <a href="" id="${cosmetico.id}" class="btn btn-secondary btn-agregar">+</a>
        <a href="" id="${cosmetico.id}" class="btn btn-secondary btn-quitar">-</a>
        <a href="#" id="${cosmetico.id}" class="btn btn-danger btn-eliminar">x</a></p></div>`);
    }
    $("#productosCarrito").append(`<div class="container-fluid"><a href="carrito.html" class="btn btn-primary">ver carrito</a></div>`);
    $('btn-agregar').click(sumaCantidad);
    $('btn-quitar').click(quitarCantidad);
    $('.btn-eliminar').on('click', eliminarCosmetico);
    $(".dropdown-menu").click(function(e) {
        e.stopPropagation();
    });
    
}

function subtotal(cosmetico){
    return cosmetico.cantidad * cosmetico.precio;
}


function llamarCosmetico(categoria) {
    $.get(urlget, function(respuesta, estado) {
        if (estado == "success") {
            let cosme = respuesta;
            for (const dato of cosme) {
                cosmeticos.push(new Cosmetico(dato.id, dato.categoria, dato.nombre, dato.descripcion, dato.color, dato.precio, dato.imagen, 1));
            }

        }
        cosmeticosCategoria(categoria);
        clickBotones();
        botonMostrar();
    })
}

function quitarCantidad(){
    let cosmetico = productoCarrito.find(p => p.id == this.id);
    if (cosmetico.cantidad > 1){
        cosmetico.agregarCantidad(-1);
        let registroUI = $(this).parent().children();
        registroUI[1].innerHTML= cosmetico.cantidad;
        registroUI[2].innerHTML= cosmetico.subtotal();
        localStorage.setItem("comprar", JSON.stringify(productoCarrito))
    }
}

function sumaCantidad(){
    let cosmetico = productoCarrito.find(p => p.id == this.id);
    cosmetico.agregarCantidad(1);
    let registroUI = $(this).parent().children();
    registroUI[1].innerHTML= cosmetico.cantidad;
    registroUI[2].innerHTML= cosmetico.subtotal();
    localStorage.setItem("comprar", JSON.stringify(productoCarrito))
}