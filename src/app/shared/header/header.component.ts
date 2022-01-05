import { Component } from '@angular/core';
import { ServiceComponentService } from 'src/app/service/serviceComponent/service-component.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

    breedList : any[] | undefined;
    constructor(
        private serviceComponent : ServiceComponentService){
        }
    
    setState(){
        this.serviceComponent.setDisplaySidebar();
    }

}