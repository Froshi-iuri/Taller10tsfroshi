export {};

// usaremos el mismo arreglo y misma interface
interface Estudiante{
    id: number,
    nombre: string,
    edad: number,
    programa: string,
    promedio: number
}

var estudiante:Estudiante[] = [
    { id: 1, nombre: "Froshi Iuri", edad: 20, programa: "Ingeniería de Sistemas", promedio: 4.2 },
    { id: 2, nombre: "Clerix Riul", edad: 22, programa: "Medicina", promedio: 4.8 },
    { id: 3, nombre: "Pixmn ter", edad: 19, programa: "Derecho", promedio: 3.9 },
    { id: 4, nombre: "terilo lores", edad: 23, programa: "Administración", promedio: 4.5 },
    { id: 5, nombre: "larix xentor", edad: 21, programa: "Diseño Gráfico", promedio: 4.0 }
]

// crearemos una función que nos permita buscar el estudiante
function searchStudent(estudiante:Estudiante[], search:number):void{
    var estudianteEncontrado = estudiante.find(e => e.id === search)
    estudianteEncontrado? console.log("Id", estudianteEncontrado.id,"encontrado: ", estudianteEncontrado) : console.log("no se encontró a la persona que tiene el id", search);
    
}


// declaramos la función llamada searchStudent,
// con el parámetro estudiante que será el que reciba el arreglo
// de estudiante. el void al final indica que va a imprimir algo en consola
// esta vez usaremos el .find que es para encontrar algo
// lleva la misma estructura del .filter, la diferencia es que
// el .filter nos devuelve un arreglo incluso si está vacio asi
// que en las condiciones no nos conviene
// luego usaremos una forma corta de if y else
// ya que será corta


searchStudent(estudiante, 1);
// por ultimo llamamos la función y le entregamos los datos
searchStudent(estudiante, 7);