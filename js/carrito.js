$(document).ready(function() {
    if ("comprar" in localStorage) {
        const listaCompra = JSON.parse(localStorage.getItem("comprar"));
        for (const compra of listaCompra) {
            productoCarrito.push(compra);
        }
    }
    carrito();
    $("#limpiar").click(borrar);

});

function carrito(){
    $("#elCarrito").empty();
    for (const cosmetico of productoCarrito) {
        $("#elCarrito").append(`
        <div class="row ">
            <div class="col-lg">
                <div class="mb-3 contenedorArticulos ">
                    <div class="pt-2">
                        <div class="row mb-4">
                            <div class="col-md-5 col-lg-3 col-xl-3">
                                <div class="   z-depth-1 rounded mb-3 mb-md-0">
                                <img class="img-fluid w-100 estiloImagen" src=${cosmetico.imagen} alt="Sample">
                            </div>
                        </div>
                    <div class="col-lg-9">
                        <div>
                            <div class="d-flex justify-content-between col-lg elDetalle">
                                <div class="col-lg-7">
                                    <h5>${cosmetico.nombre}</h5>
                                    <p class="mb-2 text-muted text-uppercase small">Color: ${cosmetico.color}</p>
                                </div>
                                <div class="col-lg-5">
                                    <div class="def-number-input number-input safari_only mb-0 w-100 row">
                                    <button id="${cosmetico.id}"  class="bordeBoton btn-agregar">+</button>
                                    <p class="textoDentro mb-0" >${cosmetico.cantidad}</p>
                                    <button id="${cosmetico.id}" class="btn-quitar bordeBoton">-</button>
                                    </div>                 
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i class="fas fa-trash-alt mr-1"></i></a>
                                <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i class="fas fa-heart mr-1"></i></a>
                                </div>
                            <p class="mb-0"><span><strong>$ ${cosmetico.precio}</strong></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        `);
        
    }
    $('.btn-agregar').click(sumaCantidad);
    $('.btn-quitar').click(quitarCantidad);
    subTotal();
    totalIva();
}

function totalArticulos(){
    const totalCompra = 0
    for (const cosmetico of productoCarrito) {
        totalCompra += cosmetico.cantidad;
    }
    return totalCompra;
}

function subTotal(){
    var subCompra = 0
    for (const cosmetico of productoCarrito) {
        subCompra = subCompra + (cosmetico.cantidad * cosmetico.precio);
    }
    $("#subTotal").empty();
    $("#subTotal").append(`<strong>$ ${subCompra}</strong>`);
}

function totalIva(){
    var totalCompra = 0
    for (const cosmetico of productoCarrito) {
        totalCompra = totalCompra + (cosmetico.cantidad * cosmetico.precio);
    }
    var iva = totalCompra * 0.16;
    var totalConiva = iva + totalCompra;
    $("#totalIva").empty();
    $("#totalIva").append(`<strong>$ ${totalConiva}</strong>`);
}

function quitarCantidad(e){
    e.preventDefault();
    let cosmetico = productoCarrito.find(p => p.id == this.id);
    if (cosmetico.cantidad > 1){
        cosmetico.cantidad -= 1;
        $(".textoDentro").empty();
        $(".textoDentro").append(`<strong>$ ${cosmetico.cantidad}</strong>`);
        localStorage.setItem("comprar", JSON.stringify(productoCarrito))
        carrito();
    }
}

function sumaCantidad(e){
    e.preventDefault();
    let cosmetico = productoCarrito.find(p => p.id == this.id);
    cosmetico.cantidad += 1;
    $(".textoDentro").empty();
    $(".textoDentro").append(`<strong>$ ${cosmetico.cantidad}</strong>`);
    localStorage.setItem("comprar", JSON.stringify(productoCarrito))
    carrito();

}

function borrar(e){
    localStorage.setItem("comprar", JSON.stringify(""))
}
