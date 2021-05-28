var funcion_Control = [];

var mensajes = [
    "mensaje 1",
    "mensaje 2",
    "mensaje 3",
    "mensaje 4",
    "mensaje 5",
    "mensaje 6",
    "mensaje 7",
    "mensaje 8",
    "mensaje 9",
    "mensaje 10",
    "mensaje 11",
    "mensaje 12"
];

for (var i = 0; i < mensajes.length; i++) {

    funcion_Control.push(function(mensaje) {
        console.log(mensaje);
    });

}

for (var i = 0; i < mensajes.length; i++) {
    funcion_Control[i](mensajes[i]);
}