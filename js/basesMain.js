$(document).ready(function() {
    llamarCosmetico(5);
    if ("comprar" in localStorage) {
        const listaCompra = JSON.parse(localStorage.getItem("comprar"));
        for (const compra of listaCompra) {
            productoCarrito.push(compra);
        }
        pintarCarritoUI(productoCarrito);
        clickBotones();
    }
});