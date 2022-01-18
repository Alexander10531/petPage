import { Params } from '@angular/router';
import { Component } from '@angular/core';
import { QueryList } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../../service/httpService/http-service.service';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.css']
})
export class MasonryComponent{
    
    columnsImage = new Array(6);
    rendererImages : string [] = [];
    loadingComponent : boolean = false;
    @ViewChildren('columnMasonry') query! : QueryList<ElementRef>;
    
    constructor(
        private activatedRoute : ActivatedRoute,
        private httpService : HttpServiceService,){
        this.activatedRoute.params.subscribe(( params : Params )=> {
            this.loadingComponent = false;
            this.obtainBreed(params.breed);
        })
    }

    obtainBreed(breed : string | undefined){
        breed == "noneBreed" ? breed = undefined : breed = breed
        this.httpService.getDogsByBreed(breed, 48)
            .subscribe(({ message } : any) => {
                this.rendererImages = message;
                for(let i = 0; i < this.columnsImage.length; i++){
                    this.columnsImage[i] = message.slice(i * 7, ((i + 1) * 7));
                }
                this.loadingComponent = true;
            })
    }


}
