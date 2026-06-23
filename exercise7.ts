export {};

interface Producto{
    id: number,
    nombre: string,
    precio: number,
    stock: number,
    categoria: string
}

var productos: Producto[] = [
    { id: 1, nombre: "Laptop Gamer Asus", precio: 1200, stock: 8, categoria: "Tecnología" },
    { id: 2, nombre: "Mouse Óptico Inalámbrico", precio: 25, stock: 45, categoria: "Tecnología" },
    { id: 3, nombre: "Teclado Mecánico RGB", precio: 75, stock: 20, categoria: "Tecnología" },
    { id: 4, nombre: "Monitor 24 Pulgadas Full HD", precio: 160, stock: 12, categoria: "Tecnología" },
    { id: 5, nombre: "Cafetera de Goteo", precio: 45, stock: 15, categoria: "Hogar" },
    { id: 6, nombre: "Licuadora de Alta Potencia", precio: 60, stock: 10, categoria: "Hogar" },
    { id: 7, nombre: "Silla Ergonómica de Oficina", precio: 180, stock: 7, categoria: "Hogar" },
    { id: 8, nombre: "Balón de Fútbol Profesional", precio: 30, stock: 35, categoria: "Deportes" },
    { id: 9, nombre: "Mochila Impermeable para Laptop", precio: 40, stock: 25, categoria: "Accesorios" },
    { id: 10, nombre: "Auriculares con Cancelación de Ruido", precio: 130, stock: 18, categoria: "Tecnología" }
]

// Arriba mismo arreglo
// ahora, debemos actualizar la lista de un arreglo, supongamos que se 
// se quiera cambiar la cantidad del stock de un producto, por ejemplo
// usaremos el id 5 y le cambiaremos la cantidad de stock la cual es 15
// almacenamos en la variable id el id del producto a cambiar, en este caso, 5
const id: number = 5
// ahora, vamos a definir la cantidad de stock que vamos a actualizar
const stockUpdateNew: number = 38

// ejecutamos función y le damos los datos que vamos a usar
updateStock(id, stockUpdateNew, productos)

// creamos la función encargada de hacer el proceso de cambiar los datos
// los parametros será el id y el nuevo número de stock
function updateStock(id: number, stockUpdateNew: number, productos: Producto[]){
    // usaremos el .find para encontrar la id y luego modificar el stock
    var idFind = productos.find((p) => id === p.id)
    id -= 1 // restamos este valor a id para que lo busquemos bien, para que vayamos contando
    // desde la posición 0 al buscar el arreglo

    // agregamos una condición de que si idFind devuelve algo que no sea vacío
    // entonces actualizará el valor de stock por el nuevo valor
    // y, además, imprimirá en consola un mensaje confirmando que se actualizó correctamente
    if (idFind){
        productos[id].stock = stockUpdateNew
        console.log("Producto con id " + (id+1) + " encontrado, su nuevo valor de stock es: " + stockUpdateNew);
        console.log(productos[id]);
    }
    // en dado caso de que no encuentre algo, se ejecutará lo de este else
    // diciendo que no encontró la id
    else{
        console.log("id " + (id+1) + "no encontrado");
    }
}