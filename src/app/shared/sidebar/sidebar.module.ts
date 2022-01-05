import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SearchInputModule } from '../search-input/search-input.module';

@NgModule({
    declarations: [
        SidebarComponent,
    ],
    imports: [
        CommonModule, 
        SearchInputModule,
    ]
})
export class SidebarModule { }
