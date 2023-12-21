window.addEventListener("DOMContentLoaded", function () {

    class newTask {
        constructor(n, d, t) {
            this.task = n;
            this.date = d;
            this.time = t;
        }

        addTaskToList(task) {
            var row = document.createElement("tr");
            row.innerHTML = `<td>${newTask.task}</td><td>${newTask.date}</td>
            <td>${newTask.time}</td><button class="delete">X</button></td>`;
            document.querySelector("#task-list").appendChild(row);
        }

        clearFields() {
            document.querySelector("#task").value = "";
            document.querySelector("#date").value = "";
            document.querySelector("#time").value = "";
        }

        showAlert(m, c) {
            var div = document.createElement("div");
            div.innerText = m;
            div.className = c;
            div.id = "#data";
            document.querySelector("#notification").appendChild(div);

            setTimeout(function () {
                document.querySelector("#data").remove();
            }, 4000);
        }

        deleteTask(elemToDelete) {
            if (elemToDelete.className === "delete") {
                elemToDelete.parentElement.parentElement.remove();
                showAlert("Task Successfully Deleted", "success");
            } else {
                showAlert("Wrong Area, click on X", "error");
            }
        }
    }

    let form = document.querySelector("#task-form");

    form.addEventListener("submit", function (e) {
        var task = document.querySelector("#task").value;
        var date = document.querySelector("#date").value;
        var time = document.querySelector("#time").value;
        var aTask = new newTask(task, date, time);

        if(aTask.task === "" || aTask.date === "" || aTask.time === "") {
            aTask.showAlert("Fields cannot be left empty.", "error");
        } else {
            aTask.addTaskToList(newTask);
            aTask.showAlert("Task added to list.", "success");
        }
        e.preventDefault();
        aTask.addTaskToList(newTask);
    });
});