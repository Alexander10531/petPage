import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
    // https://dog.ceo/api/breeds/image/random/3
    private bannedBreeds : string[] = [
        'akita', 'australian', 'buhund', 'cattledog', 'cockapoo', 'cotondetulear', 'dalmatian', 
        'frise', 'havanese', 'finnish', 'labradoodle', 'shiba', 'pitbull', 'tervuren', 'waterdog'
    ];
    private breedList = new Subject<string[]>();
    private urlReqByBreed_2 : string = "/images/random/";
    private urlReqByBreed_1 : string = "https://dog.ceo/api/breed/";
    private urlBreed : string = "https://dog.ceo/api/breeds/list/all";
    private randomDogs : string = "https://dog.ceo/api/breeds/image/random/";

    constructor(
        private httpClient : HttpClient,
    ){
        this.setBreedList();
    }

    public setBreedList(){
        
        this.obtainBreed().subscribe(({ message }) => {
            message = Object.keys(message);
            for(let i = 0; i < message.length; i++){
                if(message.includes(this.bannedBreeds[i])){
                    message.splice(message.indexOf(this.bannedBreeds[i]),1);
                }
            }
            this.breedList.next(message);
        })

    }

    public obtainBreed() : Observable<any>{
        return this.httpClient.get(this.urlBreed);
    }

    public getBreedList() : Observable<any[]>{ 
        return this.breedList.asObservable();
    }

    public getBannedBreed() : string[]{
        return this.bannedBreeds
    }

    public getDogsByBreed(breed : string | undefined, numberImage = 30) : Observable<any>{
        if(breed){
            return this.httpClient.get(`${ this.urlReqByBreed_1 }${ breed }${ this.urlReqByBreed_2 }${ numberImage }`);
        }else{
            return this.httpClient.get(`${ this.randomDogs }${ numberImage }`);
        }
    }
}