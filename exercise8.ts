export {};

// Creamos la interface para Cliente con los campos solicitados
interface Cliente {
    id: number;
    nombre: string;
    correo: string;
    telefono: string;
    activo: boolean;
}

// Creamos el arreglo con los datos de los clientes para hacer las pruebas
var clientes: Cliente[] = [
    { id: 1, nombre: "Froshi Iuri", correo: "froshi@correo.com", telefono: "3112345678", activo: true },
    { id: 2, nombre: "Clerix Riul", correo: "clerix@correo.com", telefono: "3223456789", activo: false },
    { id: 3, nombre: "Pixmn ter", correo: "pixmn@correo.com", telefono: "3004567890", activo: true },
    { id: 4, nombre: "terilo lores", correo: "terilo@correo.com", telefono: "3155678901", activo: false },
    { id: 5, nombre: "larix xentor", correo: "larix@correo.com", telefono: "3186789012", activo: true }
];

// Ahora vamos a filtrar únicamente los clientes que estén activos
// definimos la variable clientesActivos para meter el filtrado del arreglo clientes
var clientesActivos = clientes.filter(c => c.activo === true);
// con clientes.filter le decimos que recorra el arreglo y guarde los que cumplan la condición
// en este caso, c representa a cada cliente y c.activo === true revisa si el valor es verdadero
// los que cumplan con estar en true se van derechito a clientesActivos

// Usamos un forEach para imprimirlos en consola bien bonito uno por uno
clientesActivos.forEach(cA => {
    console.log('El cliente activo es: ', cA.nombre, ' con el correo: ', cA.correo);
});

// Quedó listo el de clientes
// OwO