import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { LoadingModule } from 'src/app/shared/loading/loading.module';
import { SidebarModule } from 'src/app/shared/sidebar/sidebar.module';
import { ImageCardModule } from 'src/app/shared/image-card/image-card.module';

import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        FooterModule,
        HeaderModule,
        RouterModule,
        LoadingModule, 
        SidebarModule,
        ImageCardModule,
        HomeRoutingModule,
    ]
})
export class HomeModule { }
