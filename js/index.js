//Dado un array de JSON de 8 productos, mostrar en una lista los que tengan un precio entre 1000 y 4000 (inclusive). Usar foreach y filter.
const productos = [
    {"producto":"Producto 1","precio": 500},
    {"producto":"Producto 2","precio": 1000},
    {"producto":"Producto 3","precio": 4000},
    {"producto":"Producto 4","precio": 400},
    {"producto":"Producto 5","precio": 4100},
    {"producto":"Producto 6","precio": 1020},
    {"producto":"Producto 7","precio": 8920},
    {"producto":"Producto 8","precio": 3110},
]

productos.filter(producto => producto.precio >= 1000 && producto.precio <= 4000).forEach(
    producto => {
        document.getElementById("lista").insertAdjacentHTML('beforeend', `
            <li>${producto.producto.concat( ' $' + producto.precio)}</li>
        `)
    }
);