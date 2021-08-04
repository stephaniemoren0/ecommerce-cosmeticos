var seccionContenedor = document.getElementById("laFuncion")

for (const cosmetico of cosmeticos) {
    seccionContenedor.innerHTML += `
    <div class="card-group col-4">
        <div class="card col-md contenedorPrincipal">
            <img src=${cosmetico.imagen} class="card-img-top trans imagenContenedor bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" alt="cosmetico">
            <div class="card-body">
                <h1 class="card-title">${cosmetico.nombre}</h1>
                <p class="card-text">${cosmetico.descripcion}</p>
            <p class="card-text">${cosmetico.color}</p>
            <h2 class="card-title"> Precio $ ${cosmetico.precio} </h2> <button> agregar </button> 
            </div>
        </div>
    </div>
    <br>
    `
}

const busqueda = document.getElementById("miBusqueda");

busqueda.onsubmit = function(event) {
    console.dir(event);
    event.preventDefault();
    console.dir(this);
    console.dir(this.children);
    let miCampoBusqueda = event.target.children[0].value;
    buscarProducto();

}

function validarBusqueda(event) {
    event.preventDefault;
}


//buscador de productos
function buscarProducto() {
    let filtrado = document.getElementById("filtrado");
    let input = filtrado.value.toLowerCase();
    seccionContenedor.innerHTML = ``;
    let conte = ``;
    for (const cosmetico of cosmeticos) {
        let nombreCosmetico = cosmetico.nombre.toLowerCase()
        if (nombreCosmetico.includes(input)) {
            conte += `
            <div class="card-group col-auto col-4">
                <div class="card col-md contenedorPrincipal">
                    <img src=${cosmetico.imagen} class="card-img-top trans imagenContenedor bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid" alt="cosmetico">
                    <div class="card-body">
                        <h1 class="card-title">${cosmetico.nombre}</h1>
                        <p class="card-text">${cosmetico.descripcion}</p>
                    <p class="card-text">${cosmetico.color}</p>
                    <h2 class="card-title"> Precio $ ${cosmetico.precio} </h2> <button> agregar </button> 
                    </div>
                </div>
            </div>
            <br>
            `
        }
    }
    if (conte === "") {
        conte = `
        <div class="card-group col-4">
            <div class="card col-md contenedorPrincipal">
                <img src="https://www.tuenlinea.com/wp-content/uploads/2018/08/Los-gatitos-m%C3%A1s-tiernos-que-derretir%C3%A1n-tu-coraz%C3%B3n.jpg" alt="gato">
                <p>${mensajeError}</p>
            </div>
        </div>
        <br>
        `
    }
    seccionContenedor.innerHTML = conte;
}