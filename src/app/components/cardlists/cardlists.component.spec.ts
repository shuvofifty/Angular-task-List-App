import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlistsComponent } from './cardlists.component';

describe('CardlistsComponent', () => {
  let component: CardlistsComponent;
  let fixture: ComponentFixture<CardlistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardlistsComponent]
    });
    fixture = TestBed.createComponent(CardlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
