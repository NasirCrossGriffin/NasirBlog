import { Routes } from '@angular/router';
import { MainPageComponent } from './MainPage/mainpage.component';
import { NewEntryPageComponent } from './NewEntryPage/newentrypage.component';
import { LoginComponent } from './Login/login.component';

export const routes: Routes = [
  { path: 'home', component: MainPageComponent }, // Default route
    { path: 'new', component: NewEntryPageComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'home' } // Wildcard route for 404
];
