import { Component } from '@angular/core';
import { IimageCard } from '../../interface/cardImage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

    imageCard : IimageCard[] = [
            {
                text : "Ternura...",
                urlBreed : "randomBreed",
                url : "../../../assets/gif/dogs_1_800.gif",
            },
            {
                text: "...Y lealtad",
                urlBreed : "randomBreed",
                url: "../../../assets/gif/dogs_2_800.gif",
            }
        ]

    constructor() { }

}
