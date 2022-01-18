import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ImageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule,
    ],
    exports: [
        ImageComponent, 
    ]
})
export class ImageModule { }
