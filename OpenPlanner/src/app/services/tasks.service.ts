import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const electron = (<any>window).require('electron');


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks$ = new BehaviorSubject<string[]>([]);
  directory$ = new BehaviorSubject<string[]>([]);

  constructor() {
    electron.ipcRenderer.on('getImagesResponse', (event: any, _tasks: string[]) => {

      event;
      this.tasks$.next(_tasks);
    });
    electron.ipcRenderer.on('getDirectoryResponse', (event: any, _directory: string[]) => {
      this.directory$.next(_directory);
    });
  }

  navigateDirectory(path:string) {
    electron.ipcRenderer.send('navigateDirectory', path);
  }
}