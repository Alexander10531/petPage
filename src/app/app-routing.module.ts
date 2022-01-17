import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


const ROUTES: Routes = [
    {
        path: '',
        loadChildren: ()=> import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'images/:breed',
        loadChildren: ()=> import('./pages/masonry/masonry.module').then(m => m.MasonryModule),
    },
    {
        path: '**',
        loadChildren: ()=> import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}