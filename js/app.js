let numeroRandom = 0;
let formulario = document.querySelector(`#formulario`);

//agregar eventos desde js

formulario.addEventListener(`submit`, adivinar); //Permite prevenir para poder trabajar con los valores antes de que se haga submit y se envíe el formulario

function comenzarJuego(){
    numeroRandom = Math.floor(Math.random()*(6 - 1 + 1)+ 1)
    console.log(numeroRandom)
}

function adivinar(e){
    e.preventDefault();
    console.log("adivinar");

    let numeroIngresado = document.querySelector(`#inputAdivinar`).value;
    
    if(numeroIngresado == numeroRandom){
        window.alert("Adivinaste!")
    }else if(numeroRandom < numeroIngresado) {
        alert(`Fallaste. El número ${numeroIngresado} es mayor al número mágico.`)
    }else{
        alert(`Fallaste. El número ${numeroIngresado} es menor al número mágico.`)
    }
}