$(document).ready(function() {
    const cosmetico =JSON.parse( localStorage.getItem('cosmetico'));
    


    pintarEspecifico(cosmetico);



    if ("comprar" in localStorage) {
        const listaCompra = JSON.parse(localStorage.getItem("comprar"));
        for (const compra of listaCompra) {
            productoCarrito.push(compra);
        }
        pintarCarritoUI(productoCarrito);
    }
    clickComprar(cosmetico);
});



function pintarEspecifico(cosmetico){
$("#laFuncion").append(`
    <div>
        <div class="card">
            <img  src="${cosmetico.imagen}" class="card-img-top trans imagenContenedor bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" alt="cosmetico">
            <div class="card-body">
                <h5  class="card-title">${cosmetico.nombre}</h5>
                <p  class="card-text">${cosmetico.descripcion}</p>
                <p  class="card-text">${cosmetico.color}</p>
                <h2  class="card-title">${cosmetico.precio}</h2> 
                <a href="#" id="${cosmetico.id}" class="btn btn-color btn-primary btn-comprar">Comprar</a>
            </div>
        </div>
    </div>`);
}

function clickComprar(cosmetico) {
    $('.btn-comprar').click(function(e){
        e.preventDefault();
    productoCarrito.push(cosmetico);
    //guardar en el storage
    localStorage.setItem("comprar", JSON.stringify(productoCarrito));
    pintarCarritoUI(productoCarrito);
    });
}


