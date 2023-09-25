// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-add-task',
//   templateUrl: './add-task.component.html',
//   styleUrls: ['./add-task.component.css']
// })
// export class AddTaskComponent {

// }
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskTitle: string = '';
  tasks: Task[] = []; // Declare the tasks property

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.tasks = this.todoService.getTasks().map(task => new Task(task.id, task.title));
  }

  addTask(): void {
    if (this.taskTitle.trim()) {
      this.todoService.addTask(this.taskTitle);
      this.taskTitle = '';
      this.tasks = this.todoService.getTasks().map(task => new Task(task.id, task.title));
    }
  }

  editTask(id: number, newTitle: string): void {
    this.todoService.editTask(id, newTitle);
    this.tasks = this.todoService.getTasks().map(task => new Task(task.id, task.title));
  }

  removeTask(id: number): void {
    this.todoService.removeTask(id);
    this.tasks = this.todoService.getTasks().map(task => new Task(task.id, task.title));
  }
}