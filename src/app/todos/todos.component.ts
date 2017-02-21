//Thanks to Jim & Daan for mentoring

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styles: [`
            li {color: darkgoldenrod;}
            h4 {color: darkblue;}
          `]
})
export class TodosComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
