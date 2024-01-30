const factorial = function(num){
    if(num===0 || num===1){
        return 1;
    }else if(num<0){
        return`No factorial`;
    }else{
        return num*factorial(num-1);
    }
}
console.log(factorial(5));

var myArray = [0,1,2,3,4,5,6,7,8,9];
var splice = myArray.splice(3);

console.log(splice);