import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-in-progress',
  templateUrl: './task-in-progress.component.html',
  styleUrls: ['./task-in-progress.component.scss']
})
export class TaskInProgressComponent implements OnInit {

  tasks: string[] = [] ;
  
  constructor(private tasksService: TasksService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.tasksService.tasks$.subscribe((_tasks: any) => {
      this.tasks = _tasks;
      this.cdr.detectChanges();
    });

  }

  expand(task:string) {
    console.log("expanding...")
  }

}
