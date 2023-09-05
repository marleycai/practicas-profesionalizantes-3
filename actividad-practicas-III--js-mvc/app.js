// Clase Modelo
class Modelo {
    constructor() {
        class Articulo {
            constructor(id, nombre, precio, descripcion, imagen, stock) {
                this.id = id;
                this.nombre = nombre;
                this.precio = precio;
                this.descripcion = descripcion;
                this.imagen = imagen;
                this.stock = stock;
                this.cantidad = 0;
            }

            incrementarCantidad() {
                if (this.stock > 0) {
                    this.stock--;
                    this.cantidad++;
                }
            }

            decrementarCantidad() {
                if (this.cantidad > 0) {
                    this.stock++;
                    this.cantidad--;
                }
            }
        }

        class GestorDeStockDeArticulos {
            constructor() {
                this.stock = new Map();
            }

            agregarArticulo(articulo) {
                if (!this.stock.has(articulo.id)) {
                    this.stock.set(articulo.id, articulo);
                }
            }

            quitarArticulo(articulo) {
                if (this.stock.has(articulo.id)) {
                    this.stock.delete(articulo.id);
                }
            }
        }

        class OrdenDeCompra {
            constructor() {
                this.articulos = new Map();
            }

            agregarArticulo(articulo) {
                if (!this.articulos.has(articulo.id)) {
                    this.articulos.set(articulo.id, articulo);
                }
            }

            quitarArticulo(articulo) {
                if (this.articulos.has(articulo.id)) {
                    articulo.decrementarCantidad();
                    if (articulo.cantidad === 0) {
                        this.articulos.delete(articulo.id);
                    }
                }
            }

            calcularTotal() {
                let total = 0;
                for (const { cantidad, precio } of this.articulos.values()) {
                    total += cantidad * precio;
                }
                return total;
            }
        }

        this.gestorStock = new GestorDeStockDeArticulos();
        this.ordenCompra = new OrdenDeCompra();
        // Agregar dos artículos al stock
        const camiseta = new Articulo(
            "camiseta",
            "Camiseta de Argentina sub-campeon",
            30000.00,
            "Camiseta de futbool de alta calidad 2014",
            "camiseta.jpeg",
            6
        );
        const pantalon = new Articulo(
            "pantalon",
            "Pantalón de entrenamiento AFA 2014",
            27000.00,
            "Pantalón de Argentina casual para todas las ocasiones",
            "pantalon.jpeg",
            7
        );
        this.gestorStock.agregarArticulo(camiseta);
        this.gestorStock.agregarArticulo(pantalon);
    }

    agregarArticulo(articulo) {
        if (articulo.stock > 0) {
            articulo.incrementarCantidad();
            this.ordenCompra.agregarArticulo(articulo);
        }
    }

    quitarArticulo(articulo) {
        if (this.ordenCompra.articulos.has(articulo.id)) {
            this.ordenCompra.quitarArticulo(articulo);
        }
    }

    confirmarCompra() {
        this.ordenCompra.articulos.clear();
        alert("¡Compra confirmada! Gracias por tu compra.");
    }
}

// Clase Vista
class Vista {
    constructor(modelo) {
        this.modelo = modelo;
    }

    inicializar() {
        // Crear la interfaz de usuario
        this.crearInterfaz();
        // Mostrar la lista de artículos
        this.mostrarArticulos();
    }

    crearInterfaz() {
        const body = document.body;

        // Título de la tienda
        const titulo = document.createElement("h1");
        titulo.textContent = "Tienda de Compras";
        body.appendChild(titulo);

        // Lista de artículos
        const listaArticulos = document.createElement("div");
        listaArticulos.id = "listaArticulos";
        body.appendChild(listaArticulos);

        // Título del carrito de compras
        const carritoTitulo = document.createElement("h2");
        carritoTitulo.textContent = "Carrito de Compras";
        body.appendChild(carritoTitulo);

        // Lista del carrito de compras
        const listaCarrito = document.createElement("ul");
        listaCarrito.id = "listaCarrito";
        body.appendChild(listaCarrito);

        // Total del carrito de compras
        const totalCarrito = document.createElement("p");
        totalCarrito.id = "pTotalCarrito";
        body.appendChild(totalCarrito);

        // Botón de confirmar compra
        const confirmarCompraButton = document.createElement("button");
        confirmarCompraButton.textContent = "Confirmar Compra";
        confirmarCompraButton.addEventListener("click", () => {
            this.modelo.confirmarCompra();
            this.actualizarCarrito();
            this.mostrarArticulos();
        });
        body.appendChild(confirmarCompraButton);
    }

    mostrarArticulos() {
        const listaArticulos = document.getElementById("listaArticulos");
        if (listaArticulos) {
            // Limpiar la lista de artículos
            while (listaArticulos.firstChild) {
                listaArticulos.removeChild(listaArticulos.firstChild);
            }

            for (const [id, articulo] of this.modelo.gestorStock.stock.entries()) {
                const articuloDiv = document.createElement("div");
                articuloDiv.classList.add("articulo");

                const nombre = document.createElement("h3");
                nombre.textContent = articulo.nombre;
                articuloDiv.appendChild(nombre);

                const imagen = document.createElement("img");
                imagen.src = articulo.imagen;
                imagen.addEventListener("click", () => {
                    this.mostrarDetallesArticulo(articulo);
                });
                articuloDiv.appendChild(imagen);

                const descripcion = document.createElement("h3");
                descripcion.textContent = articulo.descripcion;
                articuloDiv.appendChild(descripcion);

                const precio = document.createElement("p");
                precio.textContent = `Precio: $${articulo.precio.toFixed(2)}`;
                articuloDiv.appendChild(precio);

                const disponibles = document.createElement("p");
                disponibles.textContent = `Disponibles: ${articulo.stock}`;
                articuloDiv.appendChild(disponibles);

                const incrementarArticuloButton = document.createElement("button");
                incrementarArticuloButton.textContent = "+";
                incrementarArticuloButton.addEventListener("click", () => {
                    this.modelo.agregarArticulo(articulo);
                    this.actualizarCarrito();
                    this.mostrarArticulos();
                });
                articuloDiv.appendChild(incrementarArticuloButton);

                const decrementarArticuloButton = document.createElement("button");
                decrementarArticuloButton.textContent = "-";
                decrementarArticuloButton.addEventListener("click", () => {
                    this.modelo.quitarArticulo(articulo);
                    this.actualizarCarrito();
                    this.mostrarArticulos();
                });
                articuloDiv.appendChild(decrementarArticuloButton);

                listaArticulos.appendChild(articuloDiv);
            }
        }
    }

    mostrarDetallesArticulo(articulo) {
        document.getElementById("imagenArticulo").src = articulo.imagen;
        document.getElementById("precioArticulo").textContent = `Precio: $${articulo.precio.toFixed(2)}`;
        document.getElementById("cantidadArticulo").textContent = `Disponibles: ${articulo.stock}`;
        document.getElementById("idArticulo").textContent = articulo.id;
    }

    actualizarCarrito() {
        const listaCarrito = document.getElementById("listaCarrito");
        if (listaCarrito) {
            // Limpiar la lista del carrito de compras
            while (listaCarrito.firstChild) {
                listaCarrito.removeChild(listaCarrito.firstChild);
            }

            for (const [id, articulo] of this.modelo.ordenCompra.articulos.entries()) {
                const carritoItem = document.createElement("li");
                carritoItem.textContent = `${articulo.cantidad} x ${articulo.nombre}`;
                listaCarrito.appendChild(carritoItem);
            }

            const pTotalCarrito = document.getElementById("pTotalCarrito");
            if (pTotalCarrito) {
                pTotalCarrito.textContent = `Total: $${this.modelo.ordenCompra.calcularTotal().toFixed(2)}`;
            }
        }
    }
}

// Clase Controlador
class Controlador {
    constructor() {
        this.modelo = new Modelo();
        this.vista = new Vista(this.modelo);
    }

    iniciar() {
        this.vista.inicializar();
    }
}

// Crear una instancia del controlador y comenzar la aplicación
const controlador = new Controlador();
controlador.iniciar();
