import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ServiceComponentService {

    private displaySidebar : boolean = false; 
    constructor() {}

    getdisplaySidebar(){
        return this.displaySidebar;
    }

    setDisplaySidebar(){
        this.displaySidebar = !this.displaySidebar;
    }
}
