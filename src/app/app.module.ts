import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoHeaderComponent } from './components/todo/todo-header/todo-header.component';
import { TodoInputComponent } from './components/todo/todo-input/todo-input.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoFooterComponent } from './components/todo/todo-footer/todo-footer.component';
//import {TodoComponent} from './components/todo.component'
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoHeaderComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoFooterComponent
    //TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
