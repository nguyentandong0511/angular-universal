import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(() => HomeComponent)
    },
    {
        path: 'home/:id',
        loadComponent: () => import('./home-detail/home-detail.component').then(() => HomeDetailComponent)
    }
];
