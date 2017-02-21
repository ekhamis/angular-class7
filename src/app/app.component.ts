import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!'
  title2 = 'Angular W1 HomeWork'
  fullName = 'Eyad Khamis'
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
