//Basic example of control flow

let number = Number(prompt("Enter your number:"));
if(!Number.isNaN(number))
    {
        console.log("Square of the number is:" + number * number);
    }
else 
    {
        console.log("Not a number");
    }


