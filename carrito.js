// Obtengo el carrito en objeto
const contenedorCarrito = document.querySelector('#items2'); // selecciono el div en el que pondre la tabla de productos
const footer2 = document.querySelector('#footer2');
let json = JSON.parse(localStorage.getItem("carritoDeCompras"));
const templateFooter2 = document.querySelector('#template-footer2');




document.addEventListener('DOMContentLoaded', () => {
    
    
})
document.addEventListener('DOMContentLoaded', () => {
    contenedorCarrito.innerHTML = '';

    if(localStorage.getItem('carritoDeCompras')) {
        json = JSON.parse(localStorage.getItem('carritoDeCompras')); // el valor de carrito va a pasar de texto plano, a un objeto,
            Object.values(json).forEach(producto => {
            mostrarCarrito2(producto)
            
            mostrarFooter2();
        })
    }
    
    

})
    

const mostrarCarrito2 = (producto) => {

        contenedorCarrito.innerHTML += `<tr>
                    
        <td>${producto.nombre}</td>
        <td>${producto.cantidad}</td>
        <td>
            <button id="boton-sumar" class="sumar">+</button><button id="boton-restar" class="restar">-</button>
        </td>
        <td>${producto.precio}</td>
        </tr>`
        
}
    const mostrarFooter2 = () => {
        let carrito2 = JSON.parse(localStorage.getItem('carritoDeCompras'));

        footer2.innerHTML = ''
        const productosTotal = Object.values(carrito2).reduce((cantidadOld, producto) => {
            return cantidadOld + producto.cantidad;
        },0 )
        const precioTotal = Object.values(carrito2).reduce((precioOld, producto) => {
            return precioOld + producto.precio * producto.cantidad;
        },0)
        
        footer2.innerHTML = `<th>Total productos</th>
        <td>${productosTotal}</td>
        <td>
            <button class="vaciar-todo" id="vaciar-carrito2">
                vaciar todo
            </button>
        </td>
        <td class="precio-footer2">$ <span>${precioTotal}</span></td>`
        

        const vaciarCarrito = document.getElementById('vaciar-carrito2');
        vaciarCarrito.addEventListener('click', () => {
            Object.values(carrito2).forEach(producto => {
                producto = {};
                mostrarCarrito2(producto)
                
            })
            
        })

        if(Object.values(json).length === 0) {
            footer2.innerHTML = `<th>Carrito vacío :(</th>`
        }
    }
