import { LightningElement } from 'lwc';
export default class App extends LightningElement {
    newTask = ''

    // Data structure to hold ToDo list
    todoTasks = [
        {
            id: 1,
            name: "Task 1"
        },
        {
            id: 2,
            name: "Task 2"
        },
        {
            id: 3,
            name: "Task 3"
        },
        {
            id: 4,
            name: "Task 4"
        }
    ]

    updateNewTask(event) {
        
    }

    addToDoTask(event) {
        this.todoTasks.push ({
            id: this.todoTasks.length + 1,
            name: this.NewTask
         });
        this.newTask = '';
    }
    
    deleteToDoTask(event) {
        let idToDelete = event.target.name;
        let todoTasks = this.todoTasks;
        
        this.todoTasks.splice(todoTasks.findIndex(todoTask => todoTask.id == idToDelete), 1);
    }
}