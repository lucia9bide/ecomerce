let carrito = []

let producto1 = {
    nombre: 'pincel n15',
    color: 'marron',
    precio: 500,
    disponible: true
}
let producto2 = {
    nombre: 'fibron blanco',
    color: 'blanco',
    precio: 200,
    disponible: false
}
let producto3 = {
    nombre: 'paleta gris',
    color: 'gris',
    precio: 1000,
    disponible: true
}

let agregarItem = () => {
    carrito.push(producto1)
    carrito.push(producto2)
    carrito.push(producto3)
    return carrito.length
}

let verCarrito = () => {
    for(let i = 0; i < carrito.length-1; i++){
        elemto = i[2]
    }
}

console.log(agregarItem());