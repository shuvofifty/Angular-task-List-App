import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() color: string = '';
  @Input() btnType: string = ''
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    
  }

  onClick() {
    this.btnClick.emit();
  }
}
