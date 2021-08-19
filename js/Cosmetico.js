class Cosmetico {
    constructor(id, categoria, nombre, descripcion, color, precio, imagen) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.color = color;
        this.precio = parseFloat(precio);
        this.categoria = parseInt(categoria);
    }
}

//Cosntantes----------------------------------------------------------------
const mensajeError = "¡UPS! PRODUCTO QUE BUSCAS NO SE ENCUENTRA DISPONIBLE";


const cosmeticos = [];

const productoCarrito = [];

const urlget = "http://localhost:3000/cosmeticos"