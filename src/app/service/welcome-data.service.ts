import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  
  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldService() {
    //this sends a get request to the endpoint of the WebService Application. this forms an Observable object.
    //we declare what type of response <HelloWorldMessage> we want in the get method
    //console.log(this.http.get<HelloWorldMessage>('http://localhost:8080/helloworldbean'))
    return this.http.get<HelloWorldMessage>('http://localhost:8080/helloworldbean')
  }

  executeHelloWorldWithNameService(name) {
        
    return this.http.get<HelloWorldMessage>(`http://localhost:8080/helloworld/users/${name} `) 
  }
 
}

//this is the object to receive the message from the response
export class HelloWorldMessage {

  constructor(message: string) { }
}

