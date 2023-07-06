let a=[24,61,78,92,88,30];
let a1 = a.map(fact);
document.write("<h1>Factorial</h1>"+a1);
function fact(x){
    if (x===0){
        return 1;
    }
    return x * fact(x - 1);
}

let a2 = a.map(quot);
document.write("<h1>Quotient</h1>"+a2);
function quot(x){
    return x/2;
}

let cos = a.map(Math.cos);
document.write("<h1>Cos</h1>"+cos);
