import { Component, Input } from '@angular/core';
import ToDoTask from 'src/app/Models/Task';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() task?: ToDoTask 
}
