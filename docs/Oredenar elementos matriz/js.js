var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction() {
    points.sort(function(a, b) {
        return a - b
    });
    document.getElementById("demo").innerHTML = points;
}

// function insertion_Sort_algo(arr) {
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[0]) {
//             arr.unshift(arr.splice(i, 1)[0]);
//         } else if (arr[i] > arr[i - 1]) {
//             continue;
//         } else {
//             for (var j = 1; j < i; j++) {
//                 if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
//                     arr.splice(j, 0, arr.splice(i, 1)[0]);
//                 }
//             }
//         }
//     }
//     return arr;
// }
// console.log(insertion_Sort_algo([44, 20, 26, 54, -9, 41, 16]));

// var arrLength;

// function heapRoot(input, i) {
//     var left = 2 * i + 1;
//     var right = 2 * i + 2;
//     var max = i;
//     if (left < arrLength && input[left] > input[max]) {
//         max = left;
//     }
//     if (right < arrLength && input[right] > input[max]) {
//         max = right;
//     }
//     if (max != i) {
//         swap(input, i, max);
//         heapRoot(input, max);
//     }
// }

// function swap(input, index_A, index_B) {
//     var temp = input[index_A];
//     input[index_A] = input[index_B];
//     input[index_B] = temp;
// }

// function heapSortAlgo(input) {
//     arrLength = input.length;
//     for (var i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
//         heapRoot(input, i);
//     }
//     for (i = input.length - 1; i > 0; i--) {
//         swap(input, 0, i);
//         arrLength--;
//         heapRoot(input, 0);
//     }
// }
// var arr = [12, 10, 22, 55, -8, 64, 14];
// heapSortAlgo(arr);
// console.log(arr);