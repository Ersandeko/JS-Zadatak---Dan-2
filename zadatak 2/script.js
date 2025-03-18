'use strict';

let tasks = [];

        function addTask() {
            const input = document.getElementById("taskInput");
            const taskText = input.value.trim();

            if (taskText !== "") {
                tasks.push({ text: taskText, completed: false });
                input.value = "";
                renderTasks();
            }
        }

    

        function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            renderTasks();
        }

        
        function filterTasks() {
            renderTasks();
        }

        function renderTasks() {
            const list = document.getElementById("taskList");
            const filter = document.getElementById("filter").value;
            const searchQuery = document.getElementById("searchInput").value;
            list.innerHTML = "";
           
            tasks.forEach((task, index) => {
                if (filter === "completed" && !task.completed) return;
                if (filter === "pending" && task.completed) return;
                if(searchQuery && task.text !== searchQuery) return;

                const li = document.createElement("li");
                li.className = task.completed ? "completed" : "";

                const span = document.createElement("span");
                span.textContent = task.text;
                span.onclick = () => toggleTask(index);

                const deleteBtn = document.createElement("delete-btn");
                deleteBtn.textContent = "❌";
                deleteBtn.onclick = () => deleteTask(index);

                li.appendChild(span);
                li.appendChild(deleteBtn);
                list.appendChild(li);
            });
        }