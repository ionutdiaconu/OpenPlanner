import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Category, Task } from 'src/app/shared/Category';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task!:Task
  @Input() categoryId!: string;
  @Input() tasks!: Task[];
  @ViewChild('taskDescription') taskDescription!:ElementRef;
  
  taskDescriptionEditable:boolean = false;
  
  constructor() { }

  ngOnInit(): void {

  }

  isTaskDescriptionEditable() {
    return this.taskDescriptionEditable;
  }

  toggleEditable() {
    this.taskDescriptionEditable = !this.taskDescriptionEditable;
  }

  getEditableIcon(){
    return this.taskDescriptionEditable ? 'speaker_notes_off' : 'speaker_notes';
  }

  deleteTask() {
    console.log("will delete task with id: " + this.task.id);
    
    const index = this.tasks.indexOf(this.task, 0);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  commit() {
    this.task.description = this.taskDescription.nativeElement.value;
    this.taskDescriptionEditable = !this.taskDescriptionEditable;
  }
}
