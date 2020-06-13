import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username) {
    //this sends a get request to the endpoint of the WebService Application. this forms an Observable object.
    //we declare what type of response <Todo[]> we want in the get method
   // we have to use "ticks" `` if we have pathvariable ${username}
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos `);
  }

  deleteTodo(username, id) {
    return this.http.delete<Todo>(`http://localhost:8080/users/${username}/todos/${id} `);
  }
 
}


