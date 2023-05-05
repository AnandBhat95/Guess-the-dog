import { Component } from '@angular/core';
import { ILogin } from './login';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guess-dog';
  checkLogin:boolean=true;
  checkLogout:boolean=false;
  constructor(private router: Router, public authService: AuthService) { }
  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.checkLogin=false;
      this.checkLogout=true;
    }
  }
  logout() {
    console.log("Logout");
    this.authService.logoutva();
    this.router.navigate(['/home']);
    location.reload();

  }

}
