function cosmeticosCategoria(categoria) {
    var seccionContenedor = document.getElementById("laFuncion");
    for (const cosmetico of cosmeticos) {
        let cat = cosmetico.categoria;
        if (cat == categoria) {
            seccionContenedor.innerHTML += `<br>
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
    }
}

function buscarProducto(categoria) {
    var seccionContenedor = document.getElementById("laFuncion");
    let filtrado = document.getElementById("filtrado");
    let input = filtrado.value.toLowerCase();
    seccionContenedor.innerHTML = ``;
    let conte = ``;
    for (const cosmetico of cosmeticos) {
        let nombreCosmetico = cosmetico.nombre.toLowerCase()
        let cat = cosmetico.categoria;
        if (nombreCosmetico.includes(input) && cat == categoria) {
            conte += `
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