var age = prompt("What is your age?");

if (age < 18) {
    alert("You have been bounced! You are under 18!");
    console.log("Get out!");
} else if (age < 21) {
    alert("You may come in, but no drinks for you!");
    console.log("Okay, I guess");
} else {
    alert("COME ON IN!");
    console.log("Party Time, Excellent!");
}

if (age < 0) {
    alert("Error! Negative age");
    console.error("Negative age?!? WTF?");
} else if ( age == 21 ) {
    alert("21st birthday!!! Woo Hoo!! Shots Shots Shots!!");
} else if  ( age % 2 == 1) {
    alert("Your age is odd");
} else if ( age % Math.sqrt(age) === 0){
    alert("A perfect square!");
}
