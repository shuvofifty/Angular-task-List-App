import { Component, Input } from '@angular/core';
import ToDoTask from 'src/app/Models/Task';
import { TodoTaskService } from 'src/app/service/todo-task.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() task?: ToDoTask

  constructor(private todoService: TodoTaskService) {}
  
  onDeleteTapped() {
    this.todoService.deleteTaskWithID(this.task?.id!)
  }
}
