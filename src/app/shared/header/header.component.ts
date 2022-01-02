import { Component, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition} from '@fortawesome/free-solid-svg-icons';
import { RequestsService } from 'src/app/services/requests.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

    entireBreedList: any;
    nameBreedList: string[] = [];
    valueInput! : string[];
    faSearch: IconDefinition = faSearch;
    constructor(private requestsService : RequestsService){
        this.obtainBreedInformation();
    }

    filterSearch(input : any | undefined) : void{
        if(input){
            let value = input.target.value;
            value = input.target.value.trim().length > 0 ? input.target.value.toLowerCase() : 'a';
            let arrayBreed = this.nameBreedList.filter((message) => message.includes(value)).splice(0,5);
            this.valueInput = arrayBreed;
            return 
        }
        this.valueInput = this.nameBreedList.splice(0,5);
        
    }

    obtainBreedInformation() : void{
        this.requestsService.getBreedList()
        .subscribe(( { message } ) => {
            this.entireBreedList = message
            for(let i in message){
                this.nameBreedList.push(i.toLowerCase()); 
            }
            this.filterSearch(undefined)
        }) 
    }

    proof(nameBreed : string){
        this.requestsService.setDogBreed(nameBreed)
    }

}