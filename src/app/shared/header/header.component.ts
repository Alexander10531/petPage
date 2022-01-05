import { Component } from '@angular/core';
import { ServiceComponentService } from 'src/app/service/serviceComponent/service-component.service';
import { HttpServiceService } from '../../service/httpService/http-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

    constructor(
        private httpService : HttpServiceService,
        private serviceComponent : ServiceComponentService){}
    
    setState(){
        this.serviceComponent.setDisplaySidebar();
    }

}