import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Category, Task } from 'src/app/shared/Category';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  categories: Category[] = [
    {
      title: 'TODO',
      id: 'todo',
      tasks: [
        {
          id: 'task1',
          title: 'task1 title',
          description: 'My first task',
        },
      ],
    },
    {
      title: 'In Progress',
      id: 'inprogress',
      tasks: [
        {
          id: 'task2',
          title: 'task2 title',
          description: 'My second task',
        },
      ],
    },
    {
      title: 'Done',
      id: 'done',
      tasks: [
        {
          id: 'task3',
          title: 'task3 title',
          description: 'My 3rd task',
        },
      ],
    },
  ];

  /**
   * Category id is associated with cdkDropList
   */
  get categoryIds(): string[] {
    return this.categories.map((category) => category.id);
  }

  onTaskDrop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onCategoyDrop(event: CdkDragDrop<Category[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  constructor(
    private tasksService: TasksService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.tasksService.tasks$.subscribe((_categories: string[]) => {
      //this.categories = _categories;
      this.cdr.detectChanges();
    });
  }

  navigateDirectory(path: any) {
    this.tasksService.navigateDirectory(path);
  }

  addTodoTask() {
    const todoCategory = this.categories.find((category) => category.id === 'todo');
    todoCategory?.tasks.push({
        id: 'newTask' + todoCategory?.tasks.length,
        title: 'newTask' + todoCategory?.tasks.length,
        description: 'some description task',
      });

    console.log(`tasks len:  ${todoCategory?.tasks.length}`);
  }
}
