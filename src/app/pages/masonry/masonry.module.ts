import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { MasonryComponent } from './masonry.component';
import { SidebarModule } from 'src/app/shared/sidebar/sidebar.module';
import { MasonryRoutingModule } from './masonry-routing.module';
import { ImageModule } from 'src/app/shared/image/image.module';


@NgModule({
    declarations : [
        MasonryComponent,
    ],
    imports: [
        ImageModule,
        CommonModule,
        HeaderModule,
        SidebarModule,
        MasonryRoutingModule, 
    ],
})
export class MasonryModule { }
