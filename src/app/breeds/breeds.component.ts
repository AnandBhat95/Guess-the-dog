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
    },1000)
  }
  ngOnInit(): void {
    this.dogBreed.breeds().subscribe((data)=>{
      this.dogKeys = Object.keys(data['message']);
      for (let i = 0; i < this.dogKeys.length; i++) {
        this.dogBreed.images(this.dogKeys[i]).subscribe(
          (data) => {
            if(data && data['message'] && data['message'].length > 0){
              const newObject = {
                name: this.dogKeys[i],
                image: data['message']
              };
              this.breedsData.push(newObject);
            }
          },
          (error) => {
            const newObject = {
              name: this.dogKeys[i],
              image: 'https://replicate.delivery/pbxt/YEmgfjVLfRl3GE2LpfGAJE1ObGFNDMqI70BxPWGmwetXZXhDB/out-0.png'
            };
            this.breedsData.push(newObject);
          }
        );
      }
    })
  }
}
