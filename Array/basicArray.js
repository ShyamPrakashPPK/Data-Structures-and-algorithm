/////////////fibonacci  sequence...........


////1

function fibonacciUsingLoop(num) {
    var fib = [0, 1 , 1]
    for (var i = 3; i < num; i++){
        fib[i]=fib[i-1]+fib[i-1]
    }
    console.log(fib);
    return fib
}

fibonacciUsingLoop(5)


/////2

function fibonacciUsingRecurssion(num){
}