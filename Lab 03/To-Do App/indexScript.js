let inputBox = document.getElementById("taskNameText");
let addButton = document.getElementById("addTaskButton");
let tasksList = document.getElementById("lowerBlock");

addButton.addEventListener("click", function (e) {
    if (inputBox.value === "")
    {
        alert("Error. Empty field");
    }
    else
    {
        //Creating checkBox node
        let taskCheckBox = document.createElement("input");
        taskCheckBox.setAttribute("type", "checkbox");
        taskCheckBox.classList.add("doneCheckBox");

        //Creating span text name node
        let taskName = document.createElement("span");
        taskName.classList.add("taskName");
        taskName.innerText = inputBox.value;

        //Creating delete button node
        let deleteTaskButton = document.createElement("button");
        deleteTaskButton.classList.add("deleteTaskButton");
        deleteTaskButton.innerHTML = '<svg class="deleteIcon" width="64" height="86" viewBox="0 0 64 86" xmlns="http://www.w3.org/2000/svg">\n <path d="M0 14H64L60.5247 76.5547C60.2303 81.8539 55.8475 86 50.5401 86H13.4599C8.15253 86 3.76966 81.8539 3.47526 76.5547L0 14Z"/>\n <path d="M0 11C0 8.23858 2.23858 6 5 6H59C61.7614 6 64 8.23858 64 11V12H0V11Z"/> <path d="M19 6C19 2.68629 21.6863 0 25 0H39C42.3137 0 45 2.68629 45 6H41.4545V4.66667C41.4545 3.5621 40.5591 2.66667 39.4545 2.66667H24.5455C23.4409 2.66667 22.5455 3.5621 22.5455 4.66667V6H19Z"/>\n </svg>'

        //Appending eventListener to delete task button
        deleteTaskButton.addEventListener("click", function() {
            newTask.remove();
        });

        //Appending eventListener to done the task
        taskCheckBox.addEventListener("change", function() {
            taskName.classList.toggle("done");
        });

        //Creating task container container
        let newTask = document.createElement("div");
        newTask.classList.add("task");

        //Appending nodes to it
        newTask.appendChild(taskCheckBox);
        newTask.appendChild(taskName);
        newTask.appendChild(deleteTaskButton);

        //Appending task node to main task list container
        tasksList.appendChild(newTask);

        //Clear the input box
        inputBox.value = "";
    }
});