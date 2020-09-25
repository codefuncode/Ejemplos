// 
// ===========================================
var display = document.getElementById('display');
var paraentesis = ['(', ')'];
var corchete = ['[', ']'];
var operador = ['^', 'v', '->', '<->'];
var verdadero = ['p', 'q', 'r', 's'];
var falso = ['~p', '~q', '~r', '~s'];
var boton = document.querySelectorAll('.botones input');
var pantalla = document.getElementById('pantalla');
var texto = '';
var dato;
var primera_operacion = true;
var conjunto = false;
var operando = false;
var boleano = false;
var ecuacion = [];
var tocaBoleano = false;
var cierraParentesis = false;

pantalla.value = texto;

// ===========================================

for (var i = 0; i < boton.length; i++) {

    boton[i].addEventListener('click', imprime);
}

// ============================================
function imprime(argument) {

    if (this.value == 'AC') {

        texto = '';
        conjunto = false;
        operando = false;
        pantalla.value = texto;

    } else if (this.value == 'DEL') {

        alert('Borra ultimo lemento de la matriz ');

    } else {

        creafuncion(this.value);
    }
}
// ============================================

// ========================================================
//  Dentro de esta función  se pretende generar una ecuación 
// matemática que pueda decir el valor de la verdad de una formula 
// ========================================================

function creafuncion(valor) {

    dato = valor;

    if (primera_operacion && valor == paraentesis[0]) {

        for (var i = 0; i < boton.length; i++) {

            if (boton[i].value == paraentesis[0]) {

                boton[i].disabled = true;

            } else if (verdadero.includes(boton[i].value) == falso.includes(boton[i].value)) {

                boton[i].disabled = true;
            }

        }

    }
}

function agregavalor(argument) {
    // body... 
}

function verifica_indiceantrior(argument) {
    // body... 
}

for (var i = 0; i < boton.length; i++) {
    if (verdadero.includes(boton[i].value)) {
        boton[i].style.backgroundColor = "green";
    }
    if (falso.includes(boton[i].value)) {
        boton[i].style.backgroundColor = "red";
    }
}
// =====================================================