function cosmetico(id, nombre, descripcion, color, precio, imagen) {
    this.id = parseInt(id);
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.color = color;
    this.precio = parseFloat(precio);
}

const cosmeticos = [];
cosmeticos.push(new cosmetico(1, "Labial Studio Look Mate", "El favorito de todas. Labial líquido Studio Look mate de larga duración, un must-have para combinar todos tus looks. 6ml / 0.17fl.oz.", "LATTE", 109.90, "https://cyzone.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/200103920_fotofondoblanco.jpg"));
cosmeticos.push(new cosmetico(2, "spray fijador maquillaje studio look", "makeup intacto. el spray fijador hará que tu maquillaje dure por más tiempo además de brindarle un acabado mate a tu rostro. 60ml/2.04 fl.oz", "Transparente", 169.90, "https://cyzone.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/200102371_fotofondoblanco.jpg"));
cosmeticos.push(new cosmetico(3, "Delineador Plumón Studio Look Para Ojos", "Delineado perfecto. Delineador Plumón Studio Look Para Ojos de alta precisión, color negro intenso y fácil aplicación. 1ml.", "Negro", 109.90, "https://cyzone.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/210095652_fotofondoblanco.jpg"));
cosmeticos.push(new cosmetico(4, "Labial Graduable Mate Studio Look", "¡Tú decides la intensidad! Labial en barra con acabado mate de textura ultra ligera 2g.", "Blush nude", 109.98, "https://cyzone.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/200098797_fotofondoblanco.jpg"));
cosmeticos.push(new cosmetico(5, "Delineador De Cejas Plumón 2 En 1 Wow Brow Studio Look", "Cejas naturales contigo todo el día. Delineador De Cejas Plumón 2 En 1 Wow Brow Studio Look de larga duración con efecto microblading 0.6 ml.", "Dark Brown", 154.90, "https://cyzone.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/210097511_fotofondoblanco.jpg"));
cosmeticos.push(new cosmetico(6, "Paleta Para Rostro Studio Look", "5 productos, 1 paleta. La Paleta Para Rostro Studio Look 5 en 1 es la más completa para resaltar, definir, broncear, dar color e iluminar tu rostro.", "Calidos", 229.90, "https://cyzone.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/200102276_fotofondoblanco.jpg"));
cosmeticos.push(new cosmetico(7, "Base de Maquillaje Studio Look Mate de Alta Cobertura", "Base de maquillaje con efecto mate de alta cobertura y larga duración. fsp 20 + uva. 30g.", "Espresso", 209.90, "https://cyzone.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/200100849_fotofondoblanco.jpg"));


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