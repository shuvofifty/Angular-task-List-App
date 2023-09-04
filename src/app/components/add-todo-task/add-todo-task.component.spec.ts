import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoTaskComponent } from './add-todo-task.component';

describe('AddTodoTaskComponent', () => {
  let component: AddTodoTaskComponent;
  let fixture: ComponentFixture<AddTodoTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodoTaskComponent]
    });
    fixture = TestBed.createComponent(AddTodoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
