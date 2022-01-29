import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/Category';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task!:Task
  @Input() categoryId!: string;
  
  constructor() { }

  ngOnInit(): void {
    console.log(`categoryId: ${this.categoryId}`)
  }

}
