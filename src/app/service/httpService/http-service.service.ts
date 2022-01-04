import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

    private urlBreed : string = "https://dog.ceo/api/breeds/list/all";
    private breedList : any[] | undefined;
    constructor(
        private httpClient : HttpClient,
    ){
        this.setBreedList();
    }
    
    getBreeds() : Observable<any>{
        return this.httpClient.get(this.urlBreed);
    }

    getBreedList() : any[] | undefined{
        return this.breedList;
    }

    setBreedList(){
        this.getBreeds().subscribe(({ message }) => {
            this.breedList = message; 
        })
    }

}