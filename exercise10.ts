export {}; // para que no se pelee con los otros archivos de la tarea :v

// Creamos la interface Curso con los campos requeridos
interface Curso {
    id: number;
    nombre: string;
    instructor: string;
    calificaciones: number[]; // aquí ponemos los corchetes para indicar que es un arreglo de puros números
}

// Creamos un arreglo con 3 cursos como mínimo y les ponemos notas variadas, si algo, estos arreglos y lo de,los anteriores, se los pedí a gemini
// SOLO EL ARREGLO 
var cursos: Curso[] = [
    { id: 1, nombre: "TypeScript Básico", instructor: "Ing. Juan", calificaciones: [4.5, 3.8, 5.0, 4.2] },
    { id: 2, nombre: "Angular Componentes", instructor: "Ing. Ana", calificaciones: [3.0, 4.0, 3.5, 4.8] },
    { id: 3, nombre: "Bases de Datos Supabase", instructor: "Ing. David", calificaciones: [4.2, 4.7, 4.5, 4.9] }
];

// Usamos un forEach para pasar por cada uno de los cursos del arreglo y calcular sus promedios
cursos.forEach(cur => {
    var sumaCalificaciones: number = 0; // creamos una variable acumuladora en 0 para ir sumando las notas de este curso
    
    // hacemos otro forEach adentro pero este va a recorrer el arreglo de calificaciones de ese curso específico
    cur.calificaciones.forEach(nota => {
        sumaCalificaciones += nota; // le vamos sumando cada nota a nuestro acumulador
    });
    
    // calculamos el promedio dividiendo la suma total entre la cantidad de notas que tiene el arreglo usando .length
    var promedioCurso: number = sumaCalificaciones / cur.calificaciones.length;
    
    // imprimimos en consola el nombre del curso actual junto con su promedio final
    console.log(`Curso: ${cur.nombre} | Promedio de Calificaciones: ${promedioCurso}`);
});

// ¡Y listo, completamos los 10 ejercicios!
// OwO