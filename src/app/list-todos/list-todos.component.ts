import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public isCompleted: boolean
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn Angular', new Date(), false),
    new Todo(2, 'Take a vacation', new Date(), false),
    new Todo(3, 'Cook some dinner', new Date(), false),
  ]

  //todo = {
  //  id: 1,
  //  description: 'learn angular'
  //}

  constructor() { }

  ngOnInit(): void {
  }

  editTodo() {
    console.log("Todo should be edited")
  }

  deleteTodo() {
    console.log("Todo should be deleted")
  }
}
