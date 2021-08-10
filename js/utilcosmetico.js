function cosmeticosCategoria(categoria) {
    for (const cosmetico of cosmeticos) {
        let cat = cosmetico.categoria;
        if (cat == categoria) {
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
            `)

        }
    }
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