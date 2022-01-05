import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SearchInputModule } from '../search-input/search-input.module';

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        SearchInputModule,
    ], 
    exports: [
        HeaderComponent, 
    ]
})
export class HeaderModule {}