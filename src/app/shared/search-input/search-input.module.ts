import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input.component';


@NgModule({
    declarations: [
        SearchInputComponent
    ],
    imports: [
        CommonModule,
        RouterModule, 
    ],
    exports: [
        SearchInputComponent,
    ]
})
export class SearchInputModule { }
