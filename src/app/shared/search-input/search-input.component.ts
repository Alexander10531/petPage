import { OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

import { Component } from '@angular/core';
import { HttpServiceService } from 'src/app/service/httpService/http-service.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

    breedList : any[] | undefined; 
    searchingValue : string = "";
    @ViewChild('searchingInput') searchingInput! : ElementRef; 

    constructor(
        private httpService : HttpServiceService
    ){
        this.httpService.getBreedList().subscribe((resp)=>{
            this.breedList = Object.keys(resp);
        })
    }

    ngOnInit(): void {
    }

    renderInfo(event : any){
        this.searchingValue = event.target.value.toLowerCase(); 
    }

    get getList() : string[] | undefined{
        let actualBreed : string[] = [];
        if(this.breedList){
            actualBreed = this.breedList.filter((value) => value.includes(this.searchingValue))
            return actualBreed.splice(0,4);
        }
        return [];
    }
}
