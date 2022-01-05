import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

    private urlBreed : string = "https://dog.ceo/api/breeds/list/all";
    private breedList = new Subject<any[]>();

    constructor(
        private httpClient : HttpClient,
    ){
        this.setBreedList();
    }

    setBreedList(){
        this.obtainBreed().subscribe(({ message }) => {
            this.breedList.next(message);
        })
    }

    obtainBreed() : Observable<any>{
        return this.httpClient.get(this.urlBreed);
    }

    getBreedList() : Observable<any[]>{
        return this.breedList.asObservable();
    }

}