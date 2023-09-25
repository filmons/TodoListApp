// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-task-list',
//   templateUrl: './task-list.component.html',
//   styleUrls: ['./task-list.component.css']
// })
// export class TaskListComponent {

// }

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.tasks = this.todoService.getTasks();
  }

  removeTask(id: number): void {
    this.todoService.removeTask(id);
    this.tasks = this.todoService.getTasks();
  }

  editTask(task: Task): void {
    // console.log(task)
    // console.log(this.tasks)
    task.editing = true;
    task.newTitle = task.title; // Set the current title as the new title
  }
  
  saveTask(task: Task): void {
  
    if (task.newTitle.trim()) {
      // task.title = task.newTitle;
      this.todoService.editTask(task.id, task.newTitle)
      task.editing = false;
    }

  }
  
  cancelEdit(task: Task): void {
    task.editing = false;
  }
}