import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

    faGithub : IconDefinition = faGithub;
    faBehance : IconDefinition = faBehance; 
    faLinkedin : IconDefinition = faLinkedin;    
    faDribbble : IconDefinition = faDribbble;
    
    constructor(){
    }

}