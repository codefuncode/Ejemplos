function ejemplo1(argument) {

    let mynumber = parseInt(argument);

    let arr = [];
    for (let i = 1; i <= mynumber; i++) {
        arr.push(i.toString());
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function ejemplo2(argument) {

    let mynumber = parseInt(argument);
    let arr = new Array(mynumber);

    for (let i = 0; i < mynumber; i++) {
        arr[i] = i.toString();
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let btn_crear1 = document.querySelector(".btn_crear1");
let input_numerico1 = document.querySelector(".input_numerico1");

let btn_crear2 = document.querySelector(".btn_crear2");
let input_numerico2 = document.querySelector(".input_numerico2");

btn_crear1.addEventListener("click", function() {
    ejemplo1(input_numerico1.value);
});
btn_crear2.addEventListener("click", function() {
    ejemplo2(input_numerico2.value);
});