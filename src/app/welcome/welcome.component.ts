import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessage = 'Welcome to our page'
  name : string
  nameIsEmpty = true
  helloWorldMessage : string

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
    if (name == null) {
      this.nameIsEmpty = true
    } else {
      this.nameIsEmpty = false
    }
  }

  getHelloWorldMessage() {
    console.log(this.service.executeHelloWorldService())
    //with the help of subscribe it is executed, and the answer is needed to be captured in a variable
    //to get an answer we have to set @CrossOrigin annotation on the java controller
    //subscribe method is an asynchronous call, it will not be able to return the result
    //execute the function and whenever the response comes back, do the handleSuccessfulResponse method
    this.service.executeHelloWorldService().subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
    )

  }

  getHelloWorldMessageWithName() {
    console.log(this.service.executeHelloWorldWithNameService(this.name))
    
    this.service.executeHelloWorldWithNameService(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )

  }

  //we need a function that tells us what we should do, when we get the result back
  handleSuccessfulResponse(response) {
    //console.log("This is the response:")
    //console.log(response)
    //console.log("This is the message:")
    //console.log(response.message)
    this.helloWorldMessage = response.message
  }

  //we need a function that tells us what we should do, when we get the result back
  handleErrorResponse(error) {
    console.log("This is the error response:")
    console.log(error)
    console.log("This is the error.error:")
    console.log(error.error)
    console.log("This is the error message:")
    console.log(error.error.message)
    this.helloWorldMessage = error.error.message
  }
}
