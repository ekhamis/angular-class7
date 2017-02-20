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
    }
  }

  removeTask(task: string) {
    if (task) {
      this.tasks.pop()
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
