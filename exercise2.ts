export {};

// Definimos la misma interface

interface Estudiante{
    id: number,
    nombre: string,
    edad: number,
    programa: string,
    promedio: number,
}

// Usamos el mismo arreglo, aunque cambiamos unos promedios
// para comprobar el funcionamiento del filtrado
const estudiante: Estudiante[] = [
    { id: 1, nombre: "Froshi Iuri", edad: 20, programa: "Ingeniería de Sistemas", promedio: 3.2 },
    { id: 2, nombre: "Clerix Riul", edad: 22, programa: "Medicina", promedio: 4.8 },
    { id: 3, nombre: "Pixmn ter", edad: 19, programa: "Derecho", promedio: 3.1 },
    { id: 4, nombre: "terilo lores", edad: 23, programa: "Administración", promedio: 4.5 },
    { id: 5, nombre: "larix xentor", edad: 21, programa: "Diseño Gráfico", promedio: 4.0 }
]


// Agregamos algo adicional, agregaremos un .filter
var studentFilter = estudiante.filter(e=>e.promedio > 3.5)
// definimos una variable llamada studentFilter donde meteremos
// el filtrado que haremos, en este caso el filtrado es asi
// estudiante.filter, es practicamente decir que vamos a filtrar
// en estudiante esto: (e=>e.promedio > 3.5)
// en este caso, e representa el mismo estudiante solo que bajo
// un apodo o nombre diferente, es como un nombre que le damos
// para no estar escribiendo una variable tan larga, 
// con el e.promedio estamos diciendo que accedemos al promedio del
// arreglo e el cual es estudiante y le vamos a decir que filtraremos
// los que tengan el promedio mayor (>) a 3.5 (3.5)
// y, aquellos filtrados se almacenaran en studentFilter

studentFilter.forEach(sF => {
    console.log('El estudiante ', sF.nombre, 'fue aprobado con un promedio de ', sF.promedio);
});

// y lo imprimimos uno por uno con un forEach
// good ^u^