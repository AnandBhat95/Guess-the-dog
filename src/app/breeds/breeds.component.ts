import { Component,OnInit } from '@angular/core';
import { DogDataService } from '../services/dog-data.service'

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {
  breedsData:any=[]
  dogKeys: string[];
  enteredSerchValue:string='';
  isLoading : boolean = false;
  constructor(private dogBreed:DogDataService){
    setTimeout(()=>{
      this.isLoading = true
    },2000)
  }
  ngOnInit(): void {
    this.dogBreed.breeds().subscribe((data)=>{
      this.breedsData=data
      this.dogKeys = Object.keys(this.breedsData.message);
    })
  }




}
