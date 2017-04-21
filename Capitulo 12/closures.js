function counter(){
    var x=0;
    return function(){
        return x++;
    }
}

var count = counter();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(x);
