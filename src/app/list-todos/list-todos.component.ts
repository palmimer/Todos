import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoModalComponent } from '../todo-modal/todo-modal.component';

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

 
  constructor(
    private todoService: TodoDataService,
    private router: Router,
    private modalService: NgbModal,
    
  ) { }

  ngOnInit(): void {
    //we will retrieve the data from the todoService
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

  editTodo(id) {
    this.router.navigate(['todos', id]);
  }

  createNewTodo() {
    //this will open the page of the Todo Form
    this.router.navigate(['todos', -1]);
  }

  createNewTodoInModal() {
    //opening the modal
    const modalRef = this.modalService.open(TodoModalComponent);
    //passing an empty new todo to the modal
    //modalRef.componentInstance.todo = new Todo(-1, '', new Date, false);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

}


  

