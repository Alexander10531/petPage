import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from '../../shared/components.module';
import { HomeComponentsModule } from './components/home-components.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        HomeRoutingModule,
        HomeComponentsModule,
    ],
    exports: [
        HomeComponent,
    ]
})
export class HomeModule{}