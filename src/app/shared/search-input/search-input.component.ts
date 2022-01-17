import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

import { Component } from '@angular/core';
import { HttpServiceService } from 'src/app/service/httpService/http-service.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent{

    constador : number = 1;
    searchingValue : string = "";
    breedList : string[] | undefined; 
    @ViewChild('searchingInput') searchingInput! : ElementRef; 

    constructor(
        private httpService : HttpServiceService
    ){
        if(!sessionStorage.getItem('breed')){
            this.httpService.getBreedList().subscribe((resp)=>{
                this.breedList = Object.keys(resp);
                sessionStorage.setItem("breed", JSON.stringify(this.breedList));
            })
        }else{
            let localBreed = sessionStorage.getItem('breed');
            if(localBreed){
                this.breedList = JSON.parse(localBreed);
            }
        }
    }

    renderInfo(event : any){
        this.searchingValue = event.target.value.toLowerCase(); 
    }

    get getList() : string[] | undefined{
        this.constador = this.constador + 1;
        let actualBreed : string[] = [];
        if(this.breedList){
            actualBreed = this.breedList.filter((value) => value.includes(this.searchingValue))
            
            if(actualBreed.length > 0){
                return actualBreed.splice(0,4);
            }
        }
        return undefined
    }
}
