import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = ''
  username = 'address@something.com'
  password = ''
  errorMessage = 'Invalid username/password combination!'
  invalidLogin = false

  constructor(
    private router: Router,
    private authentication: HardcodedAuthenticationService
    ) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.authentication.authenticate(this.username, this.password)) {
      //redirect to Welcome page
      this.invalidLogin = false
      this.router.navigate(['welcome', this.name])
    } else {
      this.invalidLogin = true
    }
  }

}
