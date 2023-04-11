const displayValorAnterior = document.getElementById('vlaor-anterior');
const displayValorActual = document.getElementById('vlaor-actual');
const botonesNumeros = document.querySelectorAll('.numeros');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        display.agregarNumero(boton.innerHTML)
    })
})

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => {
        display.solucionar(boton.value)
    })
})