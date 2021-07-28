let ingresaNombre = prompt("¡Hola! ¿cual es tu nombre?");


class Ropa {
    constructor(talla, genero, categoria, total) {
        this.talla = talla;
        this.genero = genero;
        this.categoria = categoria;
        this.total = parseInt(total);
    }
}
const ropa = new Ropa();

const carritoCompra = [];



menu()


function categorias(cat) {
    if (cat == 1) {
        return "playera"
    }
    if (cat == 2) {
        return "pantalones"
    }
    if (cat == 3) {
        return "ropa interior"
    }
    if (cat == 4) {
        return "calzado"
    }
    if (cat == 5) {
        return "ropa deportiva"
    }
}

function mostrarCarrito() {
    let totalCarrito = parseInt(prompt("¿Cuantos vas a comprar?"));
    return totalCarrito;
}

function menu() {
    let inicio = parseInt(prompt("¡Hola! " + ingresaNombre + " ¿Que producto deseas comprar? \n1)Playera \n2)Pantalones \n3)Ropa Interior \n4)Calzado \n5)Ropa Deportiva "));

    if (inicio == 1) {
        let fin = categorias(inicio);
        let carrito = mostrarCarrito();
        let cuestionTalla = preguntaTalla();
        let cuestionGenero = preguntarGenero();
        preguntar(fin, cuestionGenero, cuestionTalla, carrito);
    } else if (inicio == 2) {
        let fin = categorias(inicio);
        let carrito = mostrarCarrito();
        let cuestionTalla = preguntaTalla();
        let cuestionGenero = preguntarGenero();
        preguntar(fin, cuestionGenero, cuestionTalla, carrito);

    } else if (inicio == 3) {
        let fin = categorias(inicio);
        let carrito = mostrarCarrito();
        let cuestionTalla = preguntaTalla();
        let cuestionGenero = preguntarGenero();
        preguntar(fin, cuestionGenero, cuestionTalla, carrito);
    } else if (inicio == 4) {
        let fin = categorias(inicio);
        let carrito = mostrarCarrito();
        let cuestionTalla = preguntaTalla();
        let cuestionGenero = preguntarGenero();
        preguntar(fin, cuestionGenero, cuestionTalla, carrito);

    } else if (inicio == 5) {
        let fin = categorias(inicio);
        let carrito = mostrarCarrito();
        let cuestionTalla = preguntaTalla();
        let cuestionGenero = preguntarGenero();
        preguntar(fin, cuestionGenero, cuestionTalla, carrito);

    } else {
        alert("opccion invalida")
    }

}


function preguntar(categoria, genero, talla, total) {
    let eleccion = parseInt(prompt("¿Deseas seguir comprando? \n1) Si \n2) No"));
    if (eleccion == 1) {
        carritoCompra.push(new Ropa(talla, genero, categoria, total));
        menu();
    } else if (eleccion == 2) {
        carritoCompra.push(new Ropa(talla, genero, categoria, total));
        let resultado = "";
        let totalCompra = 0;
        for (let index = 0; index < carritoCompra.length; index++) {
            resultado = resultado + carritoCompra[index].total + " de " + carritoCompra[index].categoria + " de genero " + carritoCompra[index].genero + " de talla " + carritoCompra[index].talla + "\n";
            totalCompra = totalCompra + carritoCompra[index].total;
        }
        alert("Gracias por tu compra " + "\n" + resultado + "Total de prendas compradas: " + totalCompra);
        return;
    } else {
        alert("Elige una opcion valida")
        preguntar(categoria, genero, talla, total);

    }
}

function preguntaTalla() {
    let talla = parseInt(prompt("¿Que talla deseas elegir? \n1) Chica \n2) Mediana \n3) Grande"));

    if (talla == 1) {
        return "chica";
    } else if (talla == 2) {
        return "mediana";
    } else if (talla == 3) {
        return "grande";
    } else {
        alert("Elige una opcion valida");
        return preguntaTalla();
    }

}

function preguntarGenero() {
    let genero = parseInt(prompt("¿Que genero quieres comprar? \n1) Mujer \n2) Hombre"))
    if (genero == 1) {
        return "mujer";
    } else if (genero == 2) {
        return "hombre";
    } else {
        alert("Elige una opcion valida");
        return preguntarGenero();
    }
}