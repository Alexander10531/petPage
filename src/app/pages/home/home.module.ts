import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { SearchInputComponent } from 'src/app/shared/search-input/search-input.component';

@NgModule({
    declarations: [
        HomeComponent,
        SidebarComponent,
    ],
    imports: [
        HeaderModule,
        CommonModule,
        HomeRoutingModule,
    ]
})
export class HomeModule { }
