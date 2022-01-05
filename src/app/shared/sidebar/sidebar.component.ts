import { Component } from '@angular/core';
import { ServiceComponentService } from '../../service/serviceComponent/service-component.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

    constructor(private serviceComponent : ServiceComponentService){
    }

    setStateSidebar(){
        this.serviceComponent.setDisplaySidebar();
    }

    get stateSidebar(){
        return this.serviceComponent.getdisplaySidebar();
    }

}