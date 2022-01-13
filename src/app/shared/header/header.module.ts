import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SearchInputModule } from '../search-input/search-input.module';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        SidebarModule,
        SearchInputModule,
    ], 
    exports: [
        HeaderComponent, 
    ]
})
export class HeaderModule {}