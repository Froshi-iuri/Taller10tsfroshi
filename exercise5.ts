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
    { id: 10, nombre: "Auriculares con Cancelación de Ruido", precio: 110, stock: 18, categoria: "Tecnología" }
] 

// Arriba ya sabemos que hicimos, ahora, agregaremos una función
// que nos permita añadir un nuevo producto

// abajo de este comentario, llamamos la función y le pasamos los datos que queremos meter en productos
addProduct(productos, "Poco x8 pro +", 1700000, 6, "Tecnología")

// creamos la función que hará todo el trabajo de agregar el nuevo producto
// la función se llamará addProduct, dentro de los parametros agregaremos nombre,
// precio, stock y categoria, estos vendran con el tipo de dato que son,
// al pricipio pusimos p: Product[], esto es decirle que p es el arreglo productos y
// entrará bajo el molde Producto
function addProduct(p: Producto[], nombre: string, precio: number, stock: number, categoria: string){
    // ceramos un objeto con los datos del nuevo producto
    // utilizamos .length para calcular la cantidad de productos que hay en
    // p, osea, en el arreglo productos y le sumamos 1 para que el id
    // no quede con la canidad de productos de antes de agregarlo
    var newProduct= {
        id: p.length+1,
        nombre: nombre,
        precio: precio,
        stock: stock,
        categoria: categoria
    }
    // usamos .push para agregar al final el objeto
    // haremos p.push para decirle que el push se le hará a p
    // y ¿A que le haremos push?, a p, que le vamos a enviar?
    // le enviaremos el nuevo producto que creamos, osea, newProduct
    p.push(newProduct)
    // y con un console.log lo imprimimos en consola para verificar
    // que nuestro nuevo producto se halla agregado correctamente
    console.log(p);
}


// Listo amigo
// OwO