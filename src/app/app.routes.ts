import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'maintenance', component: MaintenanceComponent},
    {path: 'favorites', component: FavoritesComponent},
];
