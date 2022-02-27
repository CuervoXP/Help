// Obtengo el carrito en objeto
const contenedorCarrito = document.querySelector('#items2'); // selecciono el div en el que pondre la tabla de productos
const footer2 = document.querySelector('#footer2')
const json = JSON.parse(localStorage.getItem("carritoDeCompras"));
const templateFooter2 = document.querySelector('template-footer2')
document.addEventListener('DOMContentLoaded', () => {
    
    
    contenedorCarrito.innerHTML = '';
    Object.values(json).forEach(producto => {
    const mostrarCarrito2 = () => {

        contenedorCarrito.innerHTML += `<tr>
                    
        <td>${producto.nombre}</td>
        <td>${producto.cantidad}</td>
        <td>
            <button id="boton-sumar" class="sumar">+</button><button id="boton-restar" class="restar">-</button>
        </td>
        <td>${producto.precio}</td>
        </tr>`
        // mostrarFooter2();
    }
    mostrarCarrito2();
})

})
/*const mostrarFooter2 = () => {
    footer2.innerHTML = ''
    const productosTotal = Object.values(json).reduce((cantidadOld, producto) => {
        return cantidadOld + producto.cantidad;
    },0 )
    const precioTotal = Object.values(json).reduce((precioOld, producto) => {
        return precioOld + producto.precio * producto.cantidad;
    },0)
    // Pinto el productoTotal y precioTotal en el template

    templateFooter2.querySelectorAll('td')[0].textContent = productosTotal;
    templateFooter2.querySelectorAll('td')[2].textContent = precioTotal;

    const clone3 = templateFooter2.cloneNode(true); // Lo clono cada vez que entre en mostrarCarrito()
    fragment.appendChild(clone3);
    footer2.appendChild(fragment);

    const vaciarCarrito = document.getElementById('vaciar-carrito2');
    vaciarCarrito.addEventListener('click', () => {
        carrito = {} // :)
        mostrarCarrito2();
    })

    if(Object.values(carrito).length === 0) {
        footer.innerHTML = `<th>Carrito vacío :(</th>`
    }
}*/


