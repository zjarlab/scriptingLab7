import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  constructor() { }
  listOfToDo = ["Get more sleep","Stay away from screens","Run for 1 hr daily","Work on personal projects"]
  ngOnInit(): void {
  }
}
