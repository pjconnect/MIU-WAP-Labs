Array.prototype.odd = function (){
    return this.filter(item => item%2 === 1);
}

Array.prototype.even = function (){
    return this.filter(item => item%2 === 0);
}

console.log([1,2,3,4,5,6,7,8].even());
console.log([1,2,3,4,5,6,7,8].odd());
