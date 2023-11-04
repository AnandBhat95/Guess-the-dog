import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DogDataService {

  url="https://dog.ceo/api/breeds/image/random"

  url1="https://dog.ceo/api/breeds/list/all"


  dogsImages:any=[]
  dogsNames:any[]
  details:any=[]
  constructor(private http:HttpClient){}

  dogs(){
    return this.http.get(this.url)
  }
  breeds(){
    return this.http.get(this.url1)
  }
  images(breedName){
    const url3='https://dog.ceo/api/breed/'+breedName+'/images/random'
    return this.http.get(url3);
  }
}
