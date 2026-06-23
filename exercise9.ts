export {}; // lo de siempre, volvemos independiente este archivo

// creamos o definimos la interface Cita para el negocio de servicios
interface Cita {
    id: number;
    cliente: string;
    servicio: string;
    fecha: string;
    hora: string;
    estado: "pendiente" | "realizada" | "cancelada"; // usaamos esto para obligar a que solo reciba uno de estos 3 textos exactos
}

// llenamos el arreglo con varias citas de ejemplo en diferentes estados
var citas: Cita[] = [
    { id: 1, cliente: "Froshi", servicio: "Corte de cabello", fecha: "2026-06-24", hora: "14:00", estado: "pendiente" },
    { id: 2, cliente: "Clerix", servicio: "Manicure", fecha: "2026-06-23", hora: "10:30", estado: "realizada" },
    { id: 3, cliente: "Pixmn", servicio: "Barba", fecha: "2026-06-25", hora: "16:00", estado: "pendiente" },
    { id: 4, cliente: "Terilo", servicio: "Tinte de cabello", fecha: "2026-06-22", hora: "11:00", estado: "cancelada" }
];

// se pide mostrar unicamente las citas pendientes
// así que volvemos a usar el .filter para separar las que necesitamos
var citasPendientes = citas.filter(cit => cit.estado === "pendiente");
// cit es el apodo que le damos a cada cita en el filtro, y comparamos que su estado sea igual a "pendiente"
// todas las que coincidan se guardan en la variable citasPendientes como un nuevo arreglo

console.log("--- CITAS PENDIENTES ---");
// las imprimimos una por una con el forEach para ver el resultado limpio en la terminal
citasPendientes.forEach(cP => {
    console.log(`Cita ID ${cP.id}: El cliente ${cP.cliente} tiene un servicio de ${cP.servicio} programado para el día ${cP.fecha} a las ${cP.hora}`);
});

// Terminado el 9
// good ^u^