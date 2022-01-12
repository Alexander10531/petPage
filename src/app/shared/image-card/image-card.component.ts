import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IimageCard } from '../../interface/cardImage';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit{

    @Input() imageCard! : IimageCard[];
    
    ngOnInit(): void {
        console.log(this.imageCard)
    }

    getImageCard(){
        return this.imageCard; 
    }

    setImageCard(){
        console.log("Esta es una funcion que veremos si sera necesaria");
    }

}