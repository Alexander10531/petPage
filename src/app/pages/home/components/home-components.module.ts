import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSelectionComponent } from './card-selection/card-selection.component';
import { ImageHeroComponent } from './image-hero/image-hero.component';
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';

@NgModule({
    declarations: [
        CardSelectionComponent,
        ImageHeroComponent,
        HorizontalMenuComponent,
    ],
    exports: [
        CardSelectionComponent,
        ImageHeroComponent,
        HorizontalMenuComponent,
    ],
    imports: [
      CommonModule
    ]
})
export class HomeComponentsModule { }
