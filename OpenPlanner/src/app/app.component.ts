import { Component, OnInit } from '@angular/core';
import { TasksService } from '../app/services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'OpenPlanner';

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.navigateDirectory('.');
  }
}