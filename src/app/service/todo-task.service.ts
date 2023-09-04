import { Injectable } from '@angular/core';
import ToDoTask from '../Models/Task';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoTaskService {
  private todoTasks: ToDoTask[] = [
    {taskName: "Some sample", isCompleted: false},
    {taskName: "Another Sample", isCompleted: false},
    {taskName: "Boi thats a lot of sampling", isCompleted: false}
  ]

  private todo$ = new BehaviorSubject<ToDoTask[]>(this.todoTasks)

  constructor() {}

  getTodo(): Observable<ToDoTask[]> {
    return this.todo$.asObservable();
  }

  addTodoTask(name: string) {
    const task: ToDoTask = {
      taskName: name,
      isCompleted: false
    }
    this.todoTasks.push(task)
  }
}
