// ex 1
function isEven(num){
    // if (num % 2 == 0) {
    //     return true;
    // }
    // return false;
    return num%2===0;
}

// ex 2
function factorial(num){
    var x = 1
    for(var i = 1; i <= num; i++){
        x = x * i;
    }
    return x;
}

// ex 3
function kebabToSnake(str){
    // if(str.indexOf("-") == -1){
    //     return str;
    // }
    var toSnake = str.replace(/-/g,"_");
    return toSnake;
}