const TaskManager = (() => {
  let tasks = [];
  let idCounter = 1;

  
  const addTask = (title) => {
    const task = {
      id: idCounter++,
      title,
      completed: false
    };
    tasks.push(task);
    console.log(`Task added: "${title}"`);
  };

 
  const listTasks = () => {
    console.log("\nAll Tasks:");
    if (tasks.length === 0) {
      console.log("No tasks available.");
    } else {
      tasks.forEach(task => {
        console.log(`#${task.id} - ${task.title} [${task.completed ? "✅ Done" : "❌ Not Done"}]`);
      });
    }
  };

    const completeTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
      console.log(`Task #${id} marked as complete.`);
    } else {
      console.log(`Task #${id} not found.`);
    }
  };

    const removeTask = (id) => {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      const removed = tasks.splice(index, 1);
      console.log(`Task #${id} removed: "${removed[0].title}"`);
    } else {
      console.log(`Task #${id} not found.`);
    }
  };

    return {
    addTask,
    listTasks,
    completeTask,
    removeTask
  };
})();

TaskManager.addTask("Buy groceries");
TaskManager.addTask("Finish JavaScript project");
TaskManager.listTasks();

TaskManager.completeTask(2);
TaskManager.listTasks();

TaskManager.removeTask(1);
TaskManager.listTasks();

