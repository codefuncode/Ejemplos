// 
// ===========================================
var paraentesis = ['(', ')'];
var corchete = ['[', ']'];
var operador = ['^', 'v', '->', '<->'];
var verdadero = ['p', 'q', 'r', 's'];
var falso = ['~p', '~q', '~r', '~s'];
var boton = document.querySelectorAll('.botones input');
var pantalla = document.getElementById('pantalla');
var texto = '';
var dato;
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
    } else {
        creafuncion(this.value);
    }
}
// ============================================

// ========================================================
//  Dentro de esta función  se pretende generar una ecuación matemática  
// que pueda decir el valor de la verdad de una formula 
// ========================================================

function creafuncion(valor) {
    dato = valor;

    // ======================================================
    //  Mitras en valor del paréntesis  sea el del indice  del primer paréntesis 
    // y no se ha creado el paréntesis  no se podrá escribir el mismo paréntesis de inicio 

    while (valor == paraentesis[0] && !(conjunto)) {

        texto = texto += dato;
        pantalla.value = texto;
        conjunto = true;
    }
    // ======================================================

    // ======================================================
    //  Solo permite escribir el paréntesis de cierre si se ha abierto uno previamente 
    while (valor == paraentesis[1] && conjunto) {

        texto = texto += dato;
        pantalla.value = texto;
        conjunto = false;
    }
    // ======================================================

    // =========================================================================
    // Si se ha escrito  un operador  pues se necesitara un valor 
    // boleano es qui de ne se toma esa decisión 
    while (!(operando) && (verdadero.includes(dato) || falso.includes(dato))) {

        texto = texto += dato;
        pantalla.value = texto;
        operando = true;
    }
    // =========================================================================

    // =====================================================
    // Si ya se escribió un operador y el valor que viene del datos 
    // esta incluido en los valores de operadores  entonces se hará esto,
    // sin embargo no me queda clara esta  condición por que me parece 
    // que necesito mas condiciones para que esto se realice Para esto he 
    // declarado otras variables para definir el tipo de elemento que se 
    // aceptara después  de  haber escrito un operador  de hecho después 
    // del operador toca un valor boleano  y después toca cerrar  o abrir paréntesis 
    if (operando && operador.includes(dato)) {

        texto = texto += dato;
        pantalla.value = texto;
        operando = false;
    }

    if (!(operando) && operador.includes(dato)) {

        texto = texto += dato;
        pantalla.value = texto;
        operando = true;

    }
    // if (valor == paraentesis[0] && !(conjunto)) {
    //     texto = texto += dato;
    //     pantalla.value = texto;
    //     conjunto = true;
    // } else if (valor == paraentesis[1] && conjunto) {
    //     texto = texto += dato;
    //     pantalla.value = texto;
    //     conjunto = false;
    // } else if (valor == '=') {
    //     alert('has presionado =');
    // }
    // if (verdadero.includes(dato) && !(conjunto)) {
    //     alert('Presionaste una variable verdadera  y no haz colocado nungun parentesis ');
    // } else if (verdadero.includes(dato) && conjunto) {
    //     alert('Presionaste una variable verdadera  y haz colocado  parentesis ');
    // }
}

// =================================================

// ===========================================
// ========================================
//  ver botones seleccionados en consola 
// for (var i = 0; i < boton.length; i++) {
//     console.log(boton[i]);
// }
// console.log('------------------------------');
// ========================================
// console.log('');
// ========================================
// =====================================================
// CSS dimnamico
// =====================================================
for (var i = 0; i < boton.length; i++) {
    if (verdadero.includes(boton[i].value)) {
        boton[i].style.backgroundColor = "green";
    }
    if (falso.includes(boton[i].value)) {
        boton[i].style.backgroundColor = "red";
    }
}
// =====================================================