import { Component, 
         ViewChild,
         ElementRef, 
         AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-image-hero',
  templateUrl: './image-hero.component.html',
  styleUrls: ['./image-hero.component.css']
})
export class ImageHeroComponent{

    title = 'petPage';
    @ViewChild('image_dog') imageDog!: ElementRef; 
    constructor() { }
}
