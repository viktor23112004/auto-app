import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

    {path: '', component: LoginPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},

    {
        path: 'auth', component: AuthPageComponent, children: [
            {path: 'home', component: HomeComponent},
            {path: 'maintenance', component: MaintenanceComponent},
            {path: 'favorites', component: FavoritesComponent},

            //CRUD
            {path: 'car-add', component: CarAddComponent},
            {path: 'car-edit/:id', component: CarEditComponent},
            {path: 'car-details/:id', component: CarDetailsComponent}
        ],
        canActivate: [authGuard]
    },

    {path: '**', component: NotFoundPageComponent},
];
