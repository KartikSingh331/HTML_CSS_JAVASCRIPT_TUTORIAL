// Factorial of a number 

let a=5;
function factorial(n){
    let fac=1;
    for(let i=1;i<=n;i++){
        fac=fac*i;

    }
    return fac;
}
console.log(factorial(a))

// Another method
function facto(n){
    let arr = Array.from(Array(n+1).keys())
    let c = arr.slice(1,).reduce((a,b)=> a*b)
    return c;
}
console.log(facto(a))