class Articulo {
    constructor(id, nombre, precio, descripcion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.cantidad = 0;
    }
}
class GestorDeStockDeArticulos {
    constructor() {
        this.stock = new Map();
    }

    agregarArticulo(articulo, cantidad) {
        if (!this.stock.has(articulo.id)) {
            this.stock.set(articulo.id, { articulo, cantidad });
        } else {
            const existente = this.stock.get(articulo.id);
            existente.cantidad += cantidad;
        }
    }

    quitarArticulo(articulo, cantidad) {
        if (this.stock.has(articulo.id)) {
            const existente = this.stock.get(articulo.id);
            existente.cantidad -= cantidad;
            if (existente.cantidad <= 0) {
                this.stock.delete(articulo.id);
            }
        }
    }
}

class OrdenDeCompra {
    constructor() {
        this.articulos = new Map();
    }

    agregarArticulo(articulo, cantidad) {
        if (!this.articulos.has(articulo.id)) {
            this.articulos.set(articulo.id, { articulo, cantidad });
        } else {
            const existente = this.articulos.get(articulo.id);
            existente.cantidad += cantidad;
        }
    }

    quitarArticulo(articulo, cantidad) {
        if (this.articulos.has(articulo.id)) {
            const existente = this.articulos.get(articulo.id);
            existente.cantidad -= cantidad;
            if (existente.cantidad <= 0) {
                this.articulos.delete(articulo.id);
            }
        }
    }

    calcularTotal() {
        let total = 0;
        for (const { articulo, cantidad } of this.articulos.values()) {
            total += articulo.precio * cantidad;
        }
        return total;
    }
}


const articulo1 = new Articulo("001", "Camiseta de Argentina 2014 sub-campeon", 20000.00, "Camiseta de futbol talle xl", "camiseta.jpeg");
const articulo2 = new Articulo("002", "Pantalón de Argentina", 30000.00, "Pantalón largo de entrenamiento dry fit talle xl", "pantalon.jpeg");
const gestorStock = new GestorDeStockDeArticulos();


gestorStock.agregarArticulo(articulo1, 10);
gestorStock.agregarArticulo(articulo2, 5);

// confirmar la compra
function confirmarCompra() {
  
    // Por ahora, simplemente reiniciamos la orden de compra
    ordenCompra = new OrdenDeCompra();
    actualizarCarrito();
    mostrarArticulos();

    
    alert("¡Compra confirmada! Gracias por tu compra.");
}

// actualizar el carrito en la interfaz
function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    for (const [id, { articulo, cantidad }] of ordenCompra.articulos.entries()) {
        const carritoItem = document.createElement("li");
        carritoItem.textContent = `${cantidad} x ${articulo.nombre}`;
        listaCarrito.appendChild(carritoItem);
    }
    pTotalCarrito.textContent = `Total: $${ordenCompra.calcularTotal().toFixed(2)}`;
}

// Función para crear y mostrar artículos en la interfaz
function mostrarArticulos() {
    listaArticulos.innerHTML = "";

    for (const [id, { articulo, cantidad }] of gestorStock.stock.entries()) {
        const articuloDiv = document.createElement("div");
        articuloDiv.classList.add("articulo");

        const nombre = document.createElement("h3");
        nombre.textContent = articulo.nombre;
        articuloDiv.appendChild(nombre);

        const imagen = document.createElement("img");
        imagen.src = articulo.imagen;
        articuloDiv.appendChild(imagen);

        const descripcion = document.createElement("h3");
        descripcion.textContent = articulo.descripcion;
        articuloDiv.appendChild(descripcion);

        const precio = document.createElement("p");
        precio.textContent = `Precio: $${articulo.precio.toFixed(2)}`;
        articuloDiv.appendChild(precio);

        const disponibles = document.createElement("p");
        disponibles.textContent = `Disponibles: ${cantidad}`;
        articuloDiv.appendChild(disponibles);

        const agregarButton = document.createElement("button");
        agregarButton.textContent = "Agregar al Carrito";
        agregarButton.addEventListener("click", () => {
            agregarAlCarrito(articulo);
        });
        articuloDiv.appendChild(agregarButton);

        listaArticulos.appendChild(articuloDiv);
    }
}

// Función para agregar un artículo al carrito
function agregarAlCarrito(articulo) {
    if (gestorStock.stock.has(articulo.id) && gestorStock.stock.get(articulo.id).cantidad > 0) {
        ordenCompra.agregarArticulo(articulo, 1);
        gestorStock.quitarArticulo(articulo, 1);
        actualizarCarrito();
        mostrarArticulos();
    }
}

//  orden de compra
let ordenCompra = new OrdenDeCompra();

// Contenedor 
const body = document.body;

// Título 
const h1 = document.createElement("h1");
h1.textContent = "Tienda de AFA";
body.appendChild(h1);

// Título de artículos disponibles
const h2Articulos = document.createElement("h2");
h2Articulos.textContent = "Indumentaria Disponible";
body.appendChild(h2Articulos);


const listaArticulos = document.createElement("div");
listaArticulos.id = "listaArticulos";
body.appendChild(listaArticulos);


const listaCarrito = document.createElement("ul");
listaCarrito.id = "listaCarrito";
body.appendChild(listaCarrito);


const pTotalCarrito = document.createElement("p");
pTotalCarrito.textContent = `Total a pagar: $0.00`;
body.appendChild(pTotalCarrito);


const confirmarCompraButton = document.createElement("button");
confirmarCompraButton.id = "confirmarCompra";
confirmarCompraButton.textContent = "Confirmar Compra";
confirmarCompraButton.addEventListener("click", confirmarCompra);
body.appendChild(confirmarCompraButton);

// Mostrar artículos y carrito al cargar la página
mostrarArticulos();
actualizarCarrito();
