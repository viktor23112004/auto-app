import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NotFoundError } from 'rxjs';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [

    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},

    {
        path: 'auth', component: AuthPageComponent, children: [
            {path: 'home', component: HomeComponent},
            {path: 'maintenance', component: MaintenanceComponent},
            {path: 'favorites', component: FavoritesComponent}
        ]
    },

    {path: '**', component: NotFoundPageComponent},
];
