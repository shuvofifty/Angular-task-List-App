import { Injectable } from '@angular/core';
import ToDoTask from '../Models/Task';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoTaskService {
  private todoTasks: ToDoTask[] = [
    {id: 0, taskName: "Some sample", isCompleted: false},
    {id: 1, taskName: "Another Sample", isCompleted: false},
    {id: 2, taskName: "Boi thats a lot of sampling", isCompleted: false}
  ]

  private todo$ = new BehaviorSubject<ToDoTask[]>(this.todoTasks)

  constructor() {}

  getTodo(): Observable<ToDoTask[]> {
    return this.todo$.asObservable();
  }

  addTodoTask(name: string) {
    const task: ToDoTask = {
      id: Date.now(),
      taskName: name,
      isCompleted: false
    }
    this.todoTasks.push(task)
  }

  deleteTaskWithID(id: number) {
    this.todoTasks = this.todoTasks.filter(task => task.id !== id);
    this.todo$.next(this.todoTasks)
  }
}
