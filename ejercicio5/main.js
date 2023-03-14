let arr = [1,2,2,3,4,4,4];
let h = [];
console.log(arr);

//Se incializa todos los valores de h en 1
for(let i = 1; i <= 5; i++){
    h[i] = 0;
}

//Se recorre el arreglo y se aumenta cada numero
for(let i=0; i<arr.length; i++){
    h[arr[i]]++;
}

//Se recorre los numeros y se muestra la cantidad de veces con la función repeat para mostrar los asteriscos
for (let i = 1; i <= 5; i++){
    console.log(i + ": " + "*".repeat(h[i]));
}
