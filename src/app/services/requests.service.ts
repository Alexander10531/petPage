import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RequestsService {

    private numberColumns! : number; 
    private numberImages : number = 10; 
    private dogBreed : string | undefined;  
    private dataImage$ = new Subject<string[]>();
    constructor(private httpClient : HttpClient){
    }

    getDogImage(imageNumber : number) : Observable<any>{
        if(this.dogBreed){
            return this.httpClient.get(`https://dog.ceo/api/breed/${ this.dogBreed }/images/random/${ imageNumber }`);
        }
        return this.httpClient.get(`https://dog.ceo/api/breeds/image/random/${ imageNumber }`);
    }

    getBreedList(): Observable<any>{
        return this.httpClient.get(`https://dog.ceo/api/breeds/list/all`);
    }

    setDataImage(newValue : string[]){
        this.dataImage$.next(newValue);
    }

    getDataImage() : Observable<any>{
        return this.dataImage$.asObservable();
    }

    setNumberOfImages(newValue : number){
        this.numberImages = newValue;
    }

    getNumberOfImages(){
        return this.numberImages;
    }

    setColumnsNumber(newValue : number) : void{
        this.numberColumns = newValue;
    }

    getColumnsNumber() : number{
        return this.numberColumns;
    }

    getDogBreed(){
        return this.dogBreed; 
    }

    setDogBreed(newDogBreed : string | undefined){
        this.dogBreed = newDogBreed;
    }

}