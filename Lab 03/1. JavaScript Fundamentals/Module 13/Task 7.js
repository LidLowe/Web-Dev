let num = +prompt("Enter any number greater than 1");

while (isNaN(num) || num <= 1 || num == null)
{
    num = +prompt("Incorrect. Enter any number greater than 1");
}

first: for (let i = 2; i <= num; i++)
{
    for (let j = 2; j < i; j++)
    {
        if ( (i % j) === 0)
        {
            continue first;
        }
    }

    alert(i);
}
