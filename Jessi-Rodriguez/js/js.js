function init() {

    var pantalla = document.getElementById("pantalla");
    var reset = document.getElementById("reset");
    var division = document.getElementById("division");
    var multiplicacion = document.getElementById("multiplicacion");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    uno.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "1";
    }
    dos.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "2";
    }
    tres.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "3";
    }
    cuatro.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "4";
    }
    cinco.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "5";
    }
    seis.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "6";
    }
    siete.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "7";
    }
    ocho.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "8";
    }
    nueve.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "9";
    }
    cero.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "0";
    }
    suma.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "+";
    }
    resta.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "-";
    }
    division.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "/";
    }

    multiplicacion.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "*";
    }

    igual.onclick = function(e) {
        let res = eval(pantalla.textContent);
        pantalla.textContent = res;
    }

    function desdeTeclado(e) {
        let codigo = e.charCode;
        let caracter = String.fromCharCode(codigo);
        let posiblesCaracteres = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "*", "+", "-", "c", "="];
        if (posiblesCaracteres.includes(caracter)) {
            pantalla.textContent = pantalla.textContent + caracter;
        } else if (codigo == 13) {
            let res = eval(pantalla.textContent);
            pantalla.textContent = res;
        } else if ((caracter == "c") || (caracter == "C")) {
            Resetear();
        }

    }

    function Resetear() {
        pantalla.textContent = " ";

    }
}
document.onkeypress = desdeTeclado;