const controlTarjeta = document.getElementById('tarjeta');

function actualizarPosicion() {
    let anchoVentana = window.innerWidth;
    let altoVentana = window.innerHeight - 10;

    let escala = Math.min(anchoVentana / 2120, altoVentana / 2120);

    let tamañoEscalado = 2120 * escala;

    let posicionX = ((anchoVentana - tamañoEscalado) + 10) / 2;
    let posicionY = ((altoVentana - tamañoEscalado) + 10) / 2;

    controlTarjeta.style.position = 'fixed';
    controlTarjeta.style.transformOrigin = '0 0'; 
    controlTarjeta.style.transform = `translate(${posicionX}px, ${posicionY}px) scale(${escala})`;

    requestAnimationFrame(actualizarPosicion);
}

actualizarPosicion();