let numeroRandom = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario === numeroRandom);
    if (numeroDeUsuario === numeroRandom) {
        asignarTextoElemento('p',`¡Acertaste el numero! en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (numeroDeUsuario > numeroRandom) {
            asignarTextoElemento('p','¡El numero secreto es menor!');
        }else {
            asignarTextoElemento('p','¡El numero secreto es mayor!');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    // document.querySelector('#valorUsuario').value = '';
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto.');
    asignarTextoElemento('p', `Ingresa un numero del 1 - ${numeroMaximo}.`);
    numeroRandom = generarNumeroSecreto();
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();

}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles.');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();