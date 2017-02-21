import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  tasks = []

  addTask(newTask) {
    if (newTask) {
      this.tasks.push(newTask)
      let index = this.tasks.indexOf(newTask)
      console.log('Task: ' + newTask + '. Index: ' + index)
    }
  }

  removeTask(task) {
    if (task) {
      let index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1)
    }
  }
}
