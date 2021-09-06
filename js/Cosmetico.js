class Cosmetico {
    constructor(id, categoria, nombre, descripcion, color, precio, imagen, cantidad) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.color = color;
        this.precio = parseFloat(precio);
        this.categoria = parseInt(categoria);
        this.cantidad= parseInt(cantidad);
    }
    agregarCantidad(valor){
        this.cantidad += valor;
    }
    
}

//Cosntantes----------------------------------------------------------------
const mensajeError = "¡UPS! PRODUCTO QUE BUSCAS NO SE ENCUENTRA DISPONIBLE";


const cosmeticos = [];

const productoCarrito = [];

const urlget = "https://cosmeticosv1.herokuapp.com/v1/api/cosmetico"