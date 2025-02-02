let listasNombresAmigos = [];
let amigoSorteado = [];
function agregarAmigo() {
    let nombresAmigos = document.getElementById('amigo').value;
    
    if (nombresAmigos == '') {
        alert('Por favor ingresa un nombre');
    } else { 
    
    listasNombresAmigos.push(nombresAmigos);

    console.log(listasNombresAmigos);
    console.log(nombresAmigos);
    limpiarCaja();
    mostrarAmigo();
    return nombresAmigos;
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarAmigo() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let a = 0; a < listasNombresAmigos.length; a++) {
        let elemento = document.createElement('li');
        elemento.textContent = listasNombresAmigos[a];
        lista.appendChild(elemento);
    }
}

function sortearAmigo() {
    if (listasNombresAmigos.length == 0) {
        alert('Ingresa amigos para hacer el sorteo');
    } else if (listasNombresAmigos.length > 1){
        while (amigoSorteado <= listasNombresAmigos.length){
            amigoSorteado = listasNombresAmigos[Math.floor(Math.random()*listasNombresAmigos.length)];
        }
        let sorteo = document.getElementById('resultado');
        sorteo.innerHTML = `El amigo secreto es ${amigoSorteado}`;

    }
}