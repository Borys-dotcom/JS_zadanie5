function nthFibonacci(n){
    let elements = [0, 1];
    let result = 0;

    if ((n===1) || (n===2)) return elements[n-1];

    for(i=2; i<=n; i++){
        elements[i] = elements[i-1] + elements[i-2];
    }

    return elements[n];
}

console.log(nthFibonacci(1));
console.log(nthFibonacci(2));
console.log(nthFibonacci(3));
console.log(nthFibonacci(4));
console.log(nthFibonacci(5));
console.log(nthFibonacci(6));
console.log(nthFibonacci(7));
console.log(nthFibonacci(8));
console.log(nthFibonacci(9));
console.log(nthFibonacci(10));