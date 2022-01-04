import { Component } from '@angular/core';
import { HttpServiceService } from '../../service/httpService/http-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

    constructor(
        private httpService : HttpServiceService){
    }

}
