function isEmpty(object)
{
    for (let property in object)
    {
        return false;
    }

    return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false