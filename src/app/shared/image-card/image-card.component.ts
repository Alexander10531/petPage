import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { IimageCard } from '../../interface/cardImage';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent{

    @Input() imageCard! : IimageCard[];    
    getImageCard(){
        return this.imageCard; 
    }

    setImageCard(){
        console.log("Esta es una funcion que veremos si sera necesaria");
    }

}