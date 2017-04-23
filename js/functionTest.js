//isEven() - takes a numerical value and returns true or false based on if it is even.
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
}

//Can also be written with a ternary operator

function isEven2(num) {
    return num % 2 === 0 ? true : false;
}

//Or, even shorter.  The return is evaluating the boolean value anyway.

function isEven3(num) {
    return num % 2 === 0;
}


//factorial() - takes a number and calculates its factorial (ex. 5! = 5x4x3x2x1)
function factorial(num) {
    if (num < 0){
        return 0;
    } else if (num === 0){
        return 1;
    } else {
        var value = num;
        while (num-- > 2){
            value *= num;
        }
        return value;
    }
}

//kebabToSnake() - changes kebab case to snake case (hello-world > hello_world)
function kebabToSnake(str) {
    return str.replace(/-/g,"_");
}
