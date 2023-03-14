let num, suma;

num = [1,3,7,8];

for (let i in num){
    for (let j in num){
        suma = num[i] + num[j];
        if (suma == 10){
            console.log(`La suma de los números: ${num[i]} + ${num[j]} es igual a: ${suma}`);
        }
    }
}
