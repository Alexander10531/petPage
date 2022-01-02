import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'image',
        loadChildren: () => import('./pages/masonry/masonry.module').then(m => m.MasonryModule)
    },
    { 
        path: '', 
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
