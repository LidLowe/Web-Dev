let login = prompt("Enter your login");

if (login === "Admin")
{
    let password = prompt("Enter your password");

    if (password === "TheMaster")
    {
        alert("Welcome");
    }
    else if (password === "" || login === null)
    {
        alert("Cancelled");
    }
    else
    {
        alert("Wrong password");
    }
}
else if (login === "" || login === null)
{
    alert("Cancelled");
}
else
{
    alert("I don’t know you");
}