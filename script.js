function on (){
    document.getElementById("lamp").src = "./img/lampada2.jpg"
}

function off (){
    document.getElementById("lamp").src = "./img/lampada1.jpg"
}

function blink () {
    var intervalo = 0;
    var contador = 0;
    while (contador < 5) {
        intervalo += 300;
        setTimeout("document.getElementById('lamp').src='./img/lampada2.jpg';",intervalo); 
        intervalo += 300;
        setTimeout("document.getElementById('lamp').src='./img/lampada1.jpg';",intervalo); 
        contador++;
        }
}