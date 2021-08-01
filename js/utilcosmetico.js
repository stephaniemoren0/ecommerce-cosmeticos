function cosmeticosCategoria(categoria, seccion) {
    for (const cosmetico of cosmeticos) {
        let cat = cosmetico.categoria;
        if (cat == categoria) {
            seccion.innerHTML += `<br>
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