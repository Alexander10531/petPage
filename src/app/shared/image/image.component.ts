import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent{

    @Input() image! : string;
    faHeart : IconDefinition = faHeart; 

}
