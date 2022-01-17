// ['akita', 'australian', 'buhund', 'cattledog', 'cockapoo', 'cotondetulear', 'dalmatian', 
// 'frise', 'havanese', 'finnish', 'labradoodle', 'shiba', 'pitbull', 'tervuren', 'waterdog']
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

    private breedList = new Subject<any[]>();
    private urlReqByBreed_2 : string = "/images/random/";
    private urlReqByBreed_1 : string = "https://dog.ceo/api/breed/";
    private urlBreed : string = "https://dog.ceo/api/breeds/list/all";

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

    petitionTest(breed : string) : Observable<any>{
        return this.httpClient.get(`${this.urlReqByBreed_1}${breed}${this.urlReqByBreed_2}50`);
    }
}