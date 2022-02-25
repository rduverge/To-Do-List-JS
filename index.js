const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

//Tarea 
let taskList = [];

function addTask(taskList, taskDesc){
    taskList.push({done: false, description: taskDesc});
}

function printTaskList (taskList){
    for (let i = 0; i < taskList.length; ++i){
        if(taskList[i].done){
            // [] Tarea realizada
            console.log('[x] ' + taskList[i].description)
        }else{
            // [] Tarea no realizada
            console.log('[]' + taskList[i].description)
        }
    } 
}

// Primer modo: lectura de tareas necesarias
function askForTasks(taskList) {
    rl.question('Introduce una nueva tarea (fin si terminas) ', function (taskDesc){
        switch (taskDesc){
            case 'fin': 
                console.log('No se intruducen ya más tareas');
                rl.close();
                break; 
            case 'exit': 
                rl.close();
                break; 
            default:
                addTask(taskList, taskDesc); 
                console.log('La lista de tareas actual es: ');
                printTaskList(taskList);
                askForTasks(taskList)             
            }
    });
}
askForTasks(taskList);

// Segundo modo: Marcar las tareas realizadas 