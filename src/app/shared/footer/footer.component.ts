import { Component } from '@angular/core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { IconDefinition} from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

    faGithub : IconDefinition = faGithub;   
    faDribbble : IconDefinition = faDribbble;
    faLinkedinIn: IconDefinition = faLinkedinIn;
    constructor() {}

}
