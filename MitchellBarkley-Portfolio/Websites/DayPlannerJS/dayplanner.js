window.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#book-form");
  form.addEventListener("submit", function (e) {
    var task = document.querySelector("#task").value;
    var date = document.querySelector("#date").value;
    var time = document.querySelector("#time").value;
    addBookToList(task, date, time);
    e.preventDefault();
  });

  function addBookToList(t, a, i) {
    if (t === "" || a === "" || i === "") {
      showAlert("Fields cannot be empty", "error");
    } else {
      var row = document.createElement("tr");
      row.innerHTML = `<td>${t}</td><td>${a}</td><td>${i}</td><td ><button class="delete">X</button></td>`;
      document.querySelector("#task-list").appendChild(row);
      clearFields();
      showAlert("Task Added to List", "success");
    }
  }

  function clearFields() {
    document.querySelector("#task").value = "";
    document.querySelector("#date").value = "";
    document.querySelector("#time").value = "";
  }

  function showAlert(m, c) {
    var div = document.createElement("div");
    div.innerText = m;
    div.className = c;
    div.id = "#box";
    document.querySelector("#notification").appendChild(div);
    setTimeout(function () {
      document.querySelector("#box").remove();
    }, 5000);
  }

  this.document
    .querySelector("#task-list")
    .addEventListener("click", function (evt) {
      deleteTask(evt.target);
    });

  function deleteTask(elemToDelete) {
    if (elemToDelete.className === "delete") {
      elemToDelete.parentElement.parentElement.remove();
      showAlert("Book deleted successfully", "success");
    } else {
      showAlert("Wrong area! click on X", "error");
    }
  }
});
