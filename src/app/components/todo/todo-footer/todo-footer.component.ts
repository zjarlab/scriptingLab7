import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  constructor() { }
  listOfToDo = ["Get more sleep","Stay away from screens","Run for 1 hr daily","Work on personal projects"];
  count : number = this.listOfToDo.length;
  ngOnInit(): void {
  }
}
