import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  listOfToDo = ["Get more sleep","Stay away from screens","Run for 1 hr daily","Work on personal projects"] 
  count:number = 0;
  ngOnInit(): void {
  }
}
