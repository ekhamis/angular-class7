//Thanks to Jim & Daan for mentoring

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular W1 HomeWork'
  fullName = 'Eyad Khamis'

  tasks: string[] = []

  addTask(newTask: string) {
    if (newTask) {
      this.tasks.push(newTask)
      let index = this.tasks.indexOf(newTask)
      console.log('Task: ' + newTask + '. Index: ' + index)
    }
  }

  removeTask(task: string) {
    if (task) {
      this.tasks = this.tasks.filter(deleteTask => deleteTask !== task)
    }
  }
}
