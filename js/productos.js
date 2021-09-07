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
<section class="mb-5 container contenedorProducto">
    <div class="row">
        <div class="col-md-6 mb-4 mb-md-0"><img src="${cosmetico.imagen}" alt="cosmetico" class="container estiloImagen" />
        </div>
            <div class="col-md-6">
            <h1 class="contenedorDetalles">${cosmetico.nombre}</h1>
            <p class="contenedorDetalles"><span class="mr-1"><strong>$ ${cosmetico.precio}</strong></span></p>
            <p class="pt-1 contenedorDetalles">${cosmetico.descripcion}</p>
                <div class="table-responsive contenedorDetalles">
                    <table class="table table-sm table-borderless mb-0">
                    <tbody>
                        <tr>
                        <th class="pl-0 w-25" scope="row"><strong>Color</strong></th>
                        <td>${cosmetico.color}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div class="table-responsive mb-2">
                    <table class="table table-sm table-borderless">
                    <tbody>
                        <tr>
                        <td class="pl-0">
                            <div class="def-number-input number-input safari_only mb-0">
                            <br />
                            <a href="#" id="${cosmetico.id}" class="btn btn-color btn-primary btn-comprar contenedorDetalles">Comprar</a>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
    </div>
</section>
`);
}

function clickComprar() {
    $('.btn-comprar').click(function(e){
        e.preventDefault();
        const cosmeticoAgregado =JSON.parse( localStorage.getItem('cosmetico'));
        const cosmeticoNuevo = new Cosmetico(cosmeticoAgregado.id, cosmeticoAgregado.categoria, cosmeticoAgregado.nombre, cosmeticoAgregado.descripcion, cosmeticoAgregado.color, cosmeticoAgregado.precio, cosmeticoAgregado.imagen, cosmeticoAgregado.cantidad)
        const cosmeticoEncontrado = productoCarrito.find(cosmetico => cosmetico.id == cosmeticoNuevo.id);
        if (cosmeticoEncontrado==null){
            cosmeticoNuevo.cantidad += 1;
            productoCarrito.push(cosmeticoNuevo);
        }
        else{
        
        let posicion = productoCarrito.findIndex(cosmeticos => cosmeticos.id == e.target.id);
        delete productoCarrito[posicion];
        productoCarrito.splice(posicion, 1);
        cosmeticoEncontrado.cantidad += 1;
        productoCarrito.push(cosmeticoEncontrado);
        }
    
    //guardar en el storage
    localStorage.setItem("comprar", JSON.stringify(productoCarrito));
    pintarCarritoUI(productoCarrito);
    });
}


