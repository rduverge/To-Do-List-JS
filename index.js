const readline = require('readline');

//Tarea 
let taskList = [];

function addTask(tasklist, taskDescription){
    tasklist.push({done: false, description: taskDescription});
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

addTask(taskList, 'Sacar la basura');
addTask(taskList, 'Lavar los platos');

printTaskList(taskList);

// Primer modo: lectura de tareas necesarias


// Segundo modo: Marcar las tareas realizadas 