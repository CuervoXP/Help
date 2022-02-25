const carritoProductos = JSON.parse(localStorage.getItem('carritoDeCompras')); // Obtengo el carrito en objeto
const contenedorCarrito = document.querySelector('.contenedor-principal'); // selecciono el div en el que pondre la tabla de productos

console.log(carritoProductos);
document.addEventListener('DOMContentLoaded', () => {
    mostrarCarrito2();
    console.log(carrito);
})

const mostrarCarrito2 = () => {
    const carritoRow = document.createElement('div'); 
    // Aca esta mi duda, no se como mostrar la tabla del index.html otra vez en carrito.html. Intenté de este modo pero la verdad no se como entrar al nombre, a la cantidad, al precio del producto...
    const carritoContent = `<tr>
            
        <td>${carritoProductos.carrito}</td>
        <td>${carritoProductos.carrito}</td>
        <td>
            <button id="boton-sumar" class="sumar">+</button><button id="boton-restar" class="restar">-</button>
        </td>
        <td>${carritoProductos.carrito}</td>
    </tr>`

    carritoRow.innerHTML = carritoContent;
    contenedorCarrito.appendChild(carritoRow);
}