var socket = io();
//  .on para escuchar
socket.on('connect', function() {
    console.log("Conectado al servidor");
});

socket.on('disconnect', function() {
    console.log('Se perdio la conexión con el servidor');
});

// .emit enviar información
socket.emit('enviarMensaje', {
    usuario: 'Israel',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta Server', resp);
});

// .on escuchar información

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor dice: ', mensaje);
});