$(document).ready(function() {
    if ("comprar" in localStorage) {
        const listaCompra = JSON.parse(localStorage.getItem("comprar"));
        for (const compra of listaCompra) {
            productoCarrito.push(compra);
        }
    }
    carrito();
});

function carrito(){
    for (const cosmetico of productoCarrito) {
        $("#elCarrito").append(`
        <div class="row contenedorArticulos">
            <div class="col-lg-8 ">
                <div class="mb-3">
                    <div class="pt-4">
                        <div class="row mb-4">
                            <div class="col-md-5 col-lg-3 col-xl-3">
                                <div class="   z-depth-1 rounded mb-3 mb-md-0">
                                <img class="img-fluid w-100" src=${cosmetico.imagen} alt="Sample">
                            </div>
                        </div>
                    <div class="col-md-7 col-lg-9 col-xl-9">
                        <div>
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h5>${cosmetico.nombre}</h5>
                                    <p class="mb-2 text-muted text-uppercase small">Color: ${cosmetico.color}</p>
                                </div>
                                <div>
                                    <div class="def-number-input number-input safari_only mb-0 w-100">
                                    <button id="basic-example-decrease" onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
                                    <input class="quantity" min="0" name="quantity" value="1" type="number">
                                    <button id="basic-example-add" onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
                                    </div>                 
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i class="fas fa-trash-alt mr-1"></i> Remove item </a>
                                <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i class="fas fa-heart mr-1"></i> Move to wish list </a>
                                </div>
                            <p class="mb-0"><span><strong>$ ${cosmetico.precio}</strong></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="mb-3">
                <div class="pt-4">
                <h5 class="mb-4">Expected shipping delivery</h5>
                <p class="mb-0"> Sabado 30 de Noviembre del 2021</p>
            </div>
        </div>
        <div class="mb-3">
            <div class="pt-4">
            <h5 class="mb-4">Paga con:</h5>
            <img class="mr-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa">
            <img class="mr-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express">
            <img class="mr-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard">
            <img class="mr-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png" alt="PayPal acceptance mark">
            </div>
        </div>
        
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 contenedorPago">

        <!-- Card -->
            <div class="mb-3">
                <div class="pt-4">

                <h5 class="mb-3">The total amount of</h5>

                <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Temporary amount
                <span id="basic-example-price">53.98</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                    <strong>The total amount of</strong>
                    <strong>
                    <p class="mb-0">(including VAT)</p>
                    </strong>
                    </div>
                <span><strong id="basic-example-total">53.98</strong></span>
                </li>
                </ul>
                <button type="button" class="btn btn-primary btn-block waves-effect waves-light">go to checkout</button>
                </div>
            </div>
            <div class="mb-3">
                <div class="pt-4">
                <a class="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Add a discount code (optional)
                <span><i class="fas fa-chevron-down pt-1"></i></span>
                </a>
                <div class="collapse" id="collapseExample">
                    <div class="mt-3">
                        <div class="md-form md-outline mb-0">
                        <input type="text" id="discount-code" class="form-control font-weight-light" placeholder="Enter discount code">
                    </div>
                </div>
            </div>
        </div>
    
        `);
        
    }
}

function totalArticulos(){
    const totalCompra = 0
    for (const cosmetico of productoCarrito) {
        totalCompra += cosmetico.cantidad;
    }
    return totalCompra;
}