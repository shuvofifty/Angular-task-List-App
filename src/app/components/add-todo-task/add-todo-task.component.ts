import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoTaskService } from 'src/app/service/todo-task.service';

@Component({
  selector: 'app-add-todo-task',
  templateUrl: './add-todo-task.component.html',
  styleUrls: ['./add-todo-task.component.scss']
})
export class AddTodoTaskComponent {
  taskForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  })

  constructor(private todoService: TodoTaskService) {}

  onSubmitForm() {
    const values = this.taskForm.value
    if(values.name === '') {
      console.log("Text is empty")
      return
    }
    this.todoService.addTodoTask(values.name!)
    this.taskForm.reset()
  }
}
