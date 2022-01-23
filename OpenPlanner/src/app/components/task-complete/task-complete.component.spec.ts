import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCompleteComponent } from './task-complete.component';

describe('TaskCompleteComponent', () => {
  let component: TaskCompleteComponent;
  let fixture: ComponentFixture<TaskCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
