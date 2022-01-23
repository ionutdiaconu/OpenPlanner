
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  directory: string[] = [];
  tasks: string[] = [] ;

  constructor(private tasksService: TasksService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.tasksService.tasks$.subscribe((_tasks: any) => {
      this.tasks = _tasks;
      this.cdr.detectChanges();
    });

    this.tasksService.directory$.subscribe((value: string[]) => {
      this.directory = value;
      this.cdr.detectChanges();
    });
  }

  navigateDirectory(path: any) {
    this.tasksService.navigateDirectory(path);
  }
}