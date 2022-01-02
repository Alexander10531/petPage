import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GridCardComponent } from './grid-card/grid-card.component';

@NgModule({
    declarations: [
        GridCardComponent,
    ],
    imports: [
      CommonModule,
      FontAwesomeModule,
    ],
    exports: [
        GridCardComponent,
    ]
})
export class MasonryComponentModule { }
