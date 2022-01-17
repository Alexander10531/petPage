import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './image-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ImageCardComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ], 
    exports: [
        ImageCardComponent,
    ]
})
export class ImageCardModule { }
