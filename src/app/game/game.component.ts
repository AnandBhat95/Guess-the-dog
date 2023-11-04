import { Component, OnInit } from '@angular/core';
import { DogDataService } from '../services/dog-data.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  id: string;
  dogs: any = [];
  breed: string;
  compare: string;
  textField: boolean = true;
  correct: boolean = false;
  incorrect: boolean = false;
  answer: boolean = false;
  isLoading : boolean = false;
  answerForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
  })
  constructor(private dogData: DogDataService, private router: Router, public authService: AuthService) {

    setTimeout(()=>{
      this.isLoading = true
    },1000)
  }
  ngOnInit(): void {
    this.dogData.dogs().subscribe((data) => {
      this.dogs = data
      console.log(this.dogs.message.split('/')[4].replace('-', ' '))
      this.breed = this.dogs.message.split('/')[4].replace('-', ' ')
      this.id = localStorage.getItem('token');
    })
  }
  reload() {
    this.ngOnInit()
    this.correct = false
    this.incorrect = false
    this.answer = false
    this.textField = true;
    this.answerForm.reset();
  }
  haveData() {
    if (this.answerForm.value.title.toLowerCase().trim() == this.breed.toLowerCase()) {
      this.correct = true;
      this.incorrect = false;
    }
    else {
      this.incorrect = true;
    }
  }
  seeAnswer() {
    this.answer = true;
    this.textField = false;

  }
  logout() {
    console.log("Logout");
    this.authService.logoutva();
    this.router.navigate(['/home']);
  }

}
