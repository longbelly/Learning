console.log("Print all numbers between -10 and 19")

for(var i = -10; i <= 19; i++) {
    console.log(i);
}

console.log("Print all even numbers between 10 and 40")

for(var i = 10; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("Print all odd numbers between 300 and 333")

for(var i = 300; i <= 333; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

console.log("Print all numbers that divide by 3 and 5 between 10 and 50")

for(var i = 10; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}
