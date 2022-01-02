import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasonryComponent } from './masonry.component';

const routes: Routes = [
    {
        path: '',
        component: MasonryComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasonryRoutingModule { }
