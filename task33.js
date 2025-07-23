function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // calling the callback
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Madhu", sayBye);

function performAction(taskName, callback) {
  console.log(`Performing: ${taskName}...`);

  
  setTimeout(() => {
    console.log(`${taskName} completed.`);
    callback(taskName); // Callback called after action is done
  }, 2000); 
}
function afterTaskDone(task) {
  console.log(`Callback: Notified that "${task}" is complete.`);
}

performAction("Data Processing", afterTaskDone);
