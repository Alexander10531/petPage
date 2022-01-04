import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent, 
    ],
    imports: [
        HeaderModule,
        CommonModule,
        HomeRoutingModule,
    ]
})
export class HomeModule { }
