import { Component } from '@angular/core';
import { ICards as cards } from '../../../../interfaces';

@Component({
  selector: 'app-card-selection',
  templateUrl: './card-selection.component.html',
  styleUrls: ['./card-selection.component.css']
})
export class CardSelectionComponent{

    dataCards : cards[] = [
        {
            imgUrl : '../../assets/photos/dog_opt.jpg',
            name: 'perros'
        },
        {
            imgUrl : '../../assets/photos/cat_opt.jpg',
            name: 'gatos'
        }
    ];
    constructor() { }

}