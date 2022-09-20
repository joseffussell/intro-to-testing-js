// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}



function sayHello(input) {
    if (input === true) {
        return "Hello, World!"
    } else {
        return 'Hello, ' + input + '!';
    }
}


function isFive(input) {
    if (input === 5) {
        return true
    } else if (input == 5) {
        return true
    } else {
        return false
    }
}


function isEven(input) {
    if (input % 2 === 0) {
        return true
    } else {
        return false
    }
}