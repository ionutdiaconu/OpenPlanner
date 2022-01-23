import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { TaskTodoComponent } from './components/task-todo/task-todo.component';
import { TaskInProgressComponent } from './components/task-in-progress/task-in-progress.component';
import { TaskCompleteComponent } from './components/task-complete/task-complete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TaskTodoComponent,
    TaskInProgressComponent,
    TaskCompleteComponent,
    TaskComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
