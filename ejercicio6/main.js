const arr = [1,3,3,3,7,2,2,,7,7,7];

for (let i  in arr){
    for (let j in arr){
        if (arr[j] > arr[i]){
            num = arr[j];
        }
    }
}

count = 0;

for (let k  in arr){
    if (num == arr[k]){
        count++;
    }
}

console.log(`El número que más se repite es: ${num} se repite: ${count}`);
