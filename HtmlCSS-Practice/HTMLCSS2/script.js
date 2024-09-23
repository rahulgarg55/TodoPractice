// Add click event listener to the "Add Task" button
document.getElementById('addTaskButton').addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    // Get the input element
    const taskInput = document.getElementById('taskInput');
    
    // Get the trimmed value of the input
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    
    // Set the inner HTML of the list item
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Add the new list item to the task list
    document.getElementById('taskList').appendChild(li);

    // Clear the input field
    taskInput.value = '';

    // Add click event listener to the list item for marking as completed
    li.addEventListener('click', function() {
        li.querySelector('span').classList.toggle('completed');
    });

    // Add click event listener to the delete button
    li.querySelector('.delete-btn').addEventListener('click', function(e) {
        // Prevent event from bubbling up to the li element
        e.stopPropagation();
        // Remove the list item
        li.remove();
    });
}
