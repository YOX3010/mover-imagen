window.onload = () => {
    //BOTONES:
    let izq = document.getElementById('left');
    let arriba = document.getElementById('top');
    let abajo = document.getElementById('bot');
    let der = document.getElementById('right');

    //IMAGEN:
    let imagen = {
        elemento: document.querySelector('#imagen'),
        topPosition: 0,
        leftPosition: 0,
        step: 25
    }


    //FUNCIONES:
    const moverIzq = () => {
        imagen.leftPosition = imagen.leftPosition - imagen.step;
        imagen.elemento.style.left = imagen.leftPosition + "px"
    }
    const moverDer = () => {
        imagen.leftPosition = imagen.leftPosition + imagen.step;
        imagen.elemento.style.left = imagen.leftPosition + "px"
    }
    const moverTop = () => {
        imagen.topPosition = imagen.topPosition - imagen.step;
        imagen.elemento.style.top = imagen.topPosition + "px"
    }
    const moverBot = () => {
        imagen.topPosition = imagen.topPosition + imagen.step;
        imagen.elemento.style.top = imagen.topPosition + "px"
    }

    //EVENTOS:
    izq.addEventListener('click', moverIzq);
    der.addEventListener('click', moverDer);
    arriba.addEventListener('click', moverTop);
    abajo.addEventListener('click', moverBot);
}