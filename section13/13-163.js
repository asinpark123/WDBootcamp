var numList = [1,2,3,4];
// Print Reverse
function printReverse(list){
    // list.forEach(function(num, i) {
    //     console.log(list[list.length-i-1]);
    // });
    for(var i = list.length-1; i >=0; i--){
        console.log(list[i]);
    }
}

// Is Uniform
function isUniform(list){
    var first = list[0];
    for(var i =0; i < list.length; i++){
        if (list[i] != first){
            return "false";
        }
    }
    return "true";
}

// Sum Array
function sumArray(list){
    var sum = 0;
    list.forEach(function(item){
        sum += item;
    });
    console.log(sum);
}

// Max
function max(list){
    var temp = list[0];
    list.forEach(function(item,i){
        if(item > temp){
            temp = item;
        }
    });
    return temp;
}