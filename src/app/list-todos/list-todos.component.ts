import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

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

  todos: Todo[]

  actionResultMessage: string

  //  = [
  //  new Todo(1, 'Learn Angular', new Date(), false),
  //  new Todo(2, 'Take a vacation', new Date(), false),
  //  new Todo(3, 'Cook some dinner', new Date(), false),
  //]

  //todo = {
  //  id: 1,
  //  description: 'learn angular'
  //}

  constructor(
    private todoService: TodoDataService
  ) { }

  ngOnInit(): void {
    //we will retrieve the data from the service
    this.refreshTodos();
  }

  refreshTodos() {
    //The this.todoService.retrieveAllTodos() call returns an observable: we have to subscribe to it and define
    //what should happen whenever a successful response comes back
    this.todoService.retrieveAllTodos('Merci').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      });
  }

  editTodo() {
    console.log("Todo should be edited");
  }

  deleteTodo(id) {
    console.log("Number " + id + " Todo should be deleted")
    this.todoService.deleteTodo('Merci', id).subscribe(
      response => {
        console.log(`Todo number ${id} is deleted.`);
        this.actionResultMessage = `Todo number ${id} is successfully deleted!`;
        this.refreshTodos();
      });
    this.actionResultMessage = null;
  }
}
