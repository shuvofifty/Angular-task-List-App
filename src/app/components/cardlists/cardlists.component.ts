import { Component } from '@angular/core';
import ToDoTask from 'src/app/Models/Task';

@Component({
  selector: 'app-cardlists',
  templateUrl: './cardlists.component.html',
  styleUrls: ['./cardlists.component.scss']
})
export class CardlistsComponent {
  todoLists: ToDoTask[] = [
    {taskName: "Some sample", isCompleted: false},
    {taskName: "Another Sample", isCompleted: false},
    {taskName: "Boi thats a lot of sampling", isCompleted: false}
  ]
}