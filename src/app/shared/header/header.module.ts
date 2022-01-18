import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SearchInputModule } from '../search-input/search-input.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SidebarModule,
        SearchInputModule,
    ], 
    exports: [
        HeaderComponent, 
    ]
})
export class HeaderModule {}