import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../login';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: ILogin = { userid: "admin", password: "pulsar200" };
  loginForm: FormGroup;
  message: string;
  returnUrl: string;

  hide: boolean = true;



  constructor(private formBuilder: FormBuilder, private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.router.navigate(['/game']);
    } else {
      this.router.navigate(['/login']);
    }

    this.loginForm = this.formBuilder.group({
      userid: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(3), Validators.pattern('[a-zA-z]+')]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]]
    });
    this.returnUrl = '/game';
    // this.authService.logout();
    console.log(this.loginForm.get('userid'))
  }
  get f() { return this.loginForm.controls; }

  login() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    else {
      if (this.f['userid'].value == this.model.userid && this.f['password'].value == this.model.password) {
        console.log("Login successful");
        //this.authService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', "true");
        // localStorage.setItem('token', this.f['userid'].value);
        this.router.navigate([this.returnUrl]);
        location.reload();
      }
      else {
        this.message = "Invalid user id or password";
      }
    }

  }
  myFunction() {
    this.hide = !this.hide;
  }
}
