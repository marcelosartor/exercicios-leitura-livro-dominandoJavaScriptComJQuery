var x = 1;
var y = 11;

function incremento(x){
    console.log("dentro ",x,y);
    x++;
    y++;
    console.log("dentro ",x,y);
}

incremento(x);

console.log("Fora ",x,y);
