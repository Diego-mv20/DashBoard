function animarNumero(elemento,final){
    let actual=0;
    const intervalo = setInterval(() =>{
        actual += Math.ceil(final/20);
        if (actual >= final){
            actual = final;
            clearInterval(intervalo)
        }
        elemento.textContent = actual;
    },50)
}

const card1 = document.querySelector(".card");
animarNumero(card1,1200);