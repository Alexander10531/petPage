import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasonryComponent } from './masonry.component';
import { MasonryRoutingModule } from './masonry-routing.module';
import { ComponentsModule } from '../../shared/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MasonryComponentModule } from './components/masonry-component.module';

@NgModule({
    declarations: [
        MasonryComponent,
    ],
    imports: [
        CommonModule,
        ComponentsModule, 
        FontAwesomeModule,
        MasonryRoutingModule,
        MasonryComponentModule,
    ],
    exports:[
        MasonryComponent,
    ],
})
export class MasonryModule { }
