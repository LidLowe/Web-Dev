function readNumber()
{
    let readNumber;

    while (true)
    {
        readNumber = +prompt("Enter number");

        if (typeof readNumber == "number")
        {
            return readNumber;
        }
    }

    return 0;
}

alert(readNumber());