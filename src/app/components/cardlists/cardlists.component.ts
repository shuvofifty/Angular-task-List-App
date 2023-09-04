import { Component, OnInit } from '@angular/core';
import ToDoTask from 'src/app/Models/Task';
import { TodoTaskService } from 'src/app/service/todo-task.service';

@Component({
  selector: 'app-cardlists',
  templateUrl: './cardlists.component.html',
  styleUrls: ['./cardlists.component.scss']
})
export class CardlistsComponent implements OnInit {
  todoLists: ToDoTask[] = []

  constructor(private todoService: TodoTaskService) {
  }

  ngOnInit(): void {
    this.todoService.getTodo().subscribe(tasks => {
      this.todoLists = tasks
    })
  }
}