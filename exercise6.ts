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

// calcularemos el valor total de los productos que tenemos en
// nuestro arreglo productos

var totalProduct: number = 0 //creamos una variable vacía que se encargará de 
// decirnos el valor total de todos los productos

productos.forEach((p)=>{
    const totalOneProduct: number = p.precio * p.stock // total del producto, no todos, solo el de uno    
    // ahí se calcula el precio por la cantidad de productos totales de ese solo producto
    totalProduct += totalOneProduct // sumamos el resultado a totalProduct
    // lo hacemos como totalProduct += totalOneProduct porque queremos decirle que le sume
    // el valor de totalOneProduct a totalProduct, si colocamos = sin el +
    // el valor se asigna mas no se suma
})

// imprimimos
console.log(`Valor total de todo el inventario: ${totalProduct}`);
