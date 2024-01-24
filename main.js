function addTask() {
    var userInput = document.getElementById("userInput");
    var taskList = document.getElementById("taskList");

    if (userInput.value.trim() !== "") {
        var li  = document.createElement("li");
        li.textContent = userInput.value;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = "";
    }
}
