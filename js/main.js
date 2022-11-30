// PRODUCTOS
const productos = [
    // Aritos
    {
        id: "arito-01",
        titulo: "Arito 01",
        imagen: "./img/aritos/01.jpg",
        categoria: {
            nombre: "Aritos",
            id: "aritos"
        },
        precio: 1000
    },
    {
        id: "arito-02",
        titulo: "Arito 02",
        imagen: "./img/aritos/02.jpg",
        categoria: {
            nombre: "Aritos",
            id: "aritos"
        },
        precio: 1000
    },
    {
        id: "arito-03",
        titulo: "Arito 03",
        imagen: "./img/aritos/03.jpg",
        categoria: {
            nombre: "Aritos",
            id: "aritos"
        },
        precio: 1000
    },
    {
        id: "arito-04",
        titulo: "Arito 04",
        imagen: "./img/aritos/04.jpg",
        categoria: {
            nombre: "Aritos",
            id: "aritos"
        },
        precio: 1000
    },
    {
        id: "arito-05",
        titulo: "Arito 05",
        imagen: "./img/aritos/05.jpg",
        categoria: {
            nombre: "Aritos",
            id: "aritos"
        },
        precio: 1000
    },
    {
        id: "arito-06",
        titulo: "Arito 06",
        imagen: "./img/aritos/06.jpg",
        categoria: {
            nombre: "Aritos",
            id: "aritos"
        },
        precio: 1000
    },
    {
        id: "arito-07",
        titulo: "Arito 07",
        imagen: "./img/aritos/07.jpg",
        categoria: {
            nombre: "Aritos",
            id: "aritos"
        },
        precio: 1000
    },
    {
        id: "arito-08",
        titulo: "Arito 08",
        imagen: "./img/aritos/08.jpg",
        categoria: {
            nombre: "Aritos",
            id: "aritos"
        },
        precio: 1000
    },
    // Anillos
    {
        id: "anillo-01",
        titulo: "Anillo 01",
        imagen: "./img/anillos/01.jpg",
        categoria: {
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 1000
    },
    {
        id: "anillo-02",
        titulo: "Anillo 02",
        imagen: "./img/anillos/02.jpg",
        categoria: {
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 1000
    },
    {
        id: "anillo-03",
        titulo: "Anillo 03",
        imagen: "./img/anillos/03.jpg",
        categoria: {
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 1000
    },
    {
        id: "anillo-04",
        titulo: "Anillo 04",
        imagen: "./img/anillos/04.jpg",
        categoria: {
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 1000
    },
    {
        id: "anillo-05",
        titulo: "Anillo 05",
        imagen: "./img/anillos/05.jpg",
        categoria: {
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 1000
    },
    {
        id: "anillo-06",
        titulo: "Anillo 06",
        imagen: "./img/anillos/06.jpg",
        categoria: {
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 1000
    },
    {
        id: "anillo-07",
        titulo: "Anillo 07",
        imagen: "./img/anillos/07.jpg",
        categoria: {
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 1000
    },
    {
        id: "anillo-08",
        titulo: "Anillo 08",
        imagen: "./img/anillos/08.jpg",
        categoria: {
            nombre: "Anillos",
            id: "anillos"
        },
        precio: 1000
    },
    // Cadenas
    {
        id: "cadena-01",
        titulo: "Cadena 01",
        imagen: "./img/cadenas/01.jpg",
        categoria: {
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 1000
    },
    {
        id: "cadena-02",
        titulo: "Cadena 02",
        imagen: "./img/cadenas/02.jpg",
        categoria: {
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 1000
    },
    {
        id: "cadena-03",
        titulo: "Cadena 03",
        imagen: "./img/cadenas/03.jpg",
        categoria: {
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 1000
    },
    {
        id: "cadena-04",
        titulo: "Cadena 04",
        imagen: "./img/cadenas/04.jpg",
        categoria: {
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 1000
    },
    {
        id: "cadena-05",
        titulo: "Cadena 05",
        imagen: "./img/cadenas/05.jpg",
        categoria: {
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 1000
    },
    {
        id: "cadena-06",
        titulo: "Cadena 06",
        imagen: "./img/cadenas/06.jpg",
        categoria: {
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 1000
    },
    {
        id: "cadena-07",
        titulo: "Cadena 07",
        imagen: "./img/cadenas/07.jpg",
        categoria: {
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 1000
    },
    {
        id: "cadena-08",
        titulo: "Cadena 08",
        imagen: "./img/cadenas/08.jpg",
        categoria: {
            nombre: "Cadenas",
            id: "cadenas"
        },
        precio: 1000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}