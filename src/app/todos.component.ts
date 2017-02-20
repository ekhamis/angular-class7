import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  tasks = []

  addTask(newTask: string) {
    if (newTask) {
      this.tasks.push(newTask)
      let index = this.tasks.indexOf(newTask)
      console.log('Task: ' + newTask + '. Index: ' + index)
    }
  }

  removeTask(task: string) {
    if (task) {
      let index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1)
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
