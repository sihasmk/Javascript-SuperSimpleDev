const todoList = [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i=0; i<todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, date } = todoObject;

        const html = `
            <div>
                ${name}
            </div>
            <div>
                ${date}
            </div>
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
                " 
                class="delete-button">
                Delete
            </button>`;
        todoListHTML += html;
    }
    
    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
    const nameElem = document.querySelector(".js-todo-name");
    const dateElem = document.querySelector(".js-todo-date");
    const name = nameElem.value;
    const date = dateElem.value;

    if (!name || !date) {
        if (!name && !date) {
            alert("Please enter a to-do name and select a date to add.");
            return;
        }

        else if (!name) {
            alert("Please enter a to-do name to add.");
            return;
        }

        else if (!date) {
            alert("Please select a to-do date to add.");
            return;
        }
    }

    if (name && date) {
        todo = {
            name,
            date
        }
        todoList.push(todo);
        renderTodoList();
    }

    nameElem.value = '';
    dateElem.value = '';   
}

