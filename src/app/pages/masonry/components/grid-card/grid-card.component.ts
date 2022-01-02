import { AfterViewInit, Input } from '@angular/core';
import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.css']
})
export class GridCardComponent implements AfterViewInit{

    imagesCard: string[] = [];
    @Input() iColumn! : number;
    faHeart : IconDefinition = faHeart;

    constructor(private requestService : RequestsService){
        this.requestService.getDataImage()
            .subscribe(({ message }) => {
                if(message != undefined){
                    this.imagesCard.push(
                        ...(message.slice(this.iColumn * this.requestService.getNumberOfImages(),
                        this.iColumn * this.requestService.getNumberOfImages() + (this.requestService.getNumberOfImages()))
                    ))
                    // this.imagesCard = message.slice(
                    //     this.iColumn * this.requestService.getNumberOfImages(),
                    //     this.iColumn * this.requestService.getNumberOfImages() + (this.requestService.getNumberOfImages())
                    // )
                    if(this.iColumn + 1 == this.requestService.getColumnsNumber()){
                        this.requestService.setDataImage([])
                    }
                }
            })
    }

    ngAfterViewInit(){
    }

}
