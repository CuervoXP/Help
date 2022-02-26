const obtenerProductosLocalStorage = () => {
    let productosLS;

    if(localStorage.getItem('carrito') === null) {
        productosLS = [];
    } else {
        productosLS = JSON.parse(localStorage.getItem('carrito'));
    }
    return productosLS
} // Obtengo el carrito en objeto
const contenedorCarrito = document.querySelector('.contenedor-principal'); // selecciono el div en el que pondre la tabla de productos
document.addEventListener('DOMContentLoaded', () => {
    mostrarCarrito2();
})

const mostrarCarrito2 = () => {
    let productosLS;
    productosLS = obtenerProductosLocalStorage();
    productosLS.forEach(producto => {
        const row = document.createElement('div');
        row.innerHTML = `<tr>
            
        <td>${producto.nombre}</td>
        <td>${producto.cantidad}</td>
        <td>
            <button id="boton-sumar" class="sumar">+</button><button id="boton-restar" class="restar">-</button>
        </td>
        <td>${producto.total}</td>
    </tr>`
    contenedorCarrito.appendChild(row);
    });

    
}