// step 1: set up an array for where todos will go
const tasks = [];

while(true) {
    // asking for a user input
    let task = prompt("Enter a task (or type 'done' to finish");

    //check if user input is done or Done or DONE
    if(task.toLowerCase() === 'done') {
        break; // if done breaking out of while loop
    }

    tasks.push(task); // adding user input to tasks
}

// To display tasks
console.log("Your Todo List");

tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
});