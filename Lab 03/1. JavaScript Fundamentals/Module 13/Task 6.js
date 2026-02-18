let input = +prompt("Input number greater than 100");

while (input <= 100 || input === null || isNaN(input))
{
    input = +prompt("Input number greater than 100");
}

alert(input);