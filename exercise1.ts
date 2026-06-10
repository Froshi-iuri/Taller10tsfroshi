export {};//Si algo, esto es para no evitar errores con nombres de mismas variables en otros archivos
//vuelve independiente ese archivo, lo pondré en cada uno de los archivos

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

console.log(estudiante);
