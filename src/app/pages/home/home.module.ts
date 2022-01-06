import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { SidebarModule } from 'src/app/shared/sidebar/sidebar.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        HeaderModule,
        SidebarModule,
        CommonModule,
        HomeRoutingModule,
    ]
})
export class HomeModule { }
