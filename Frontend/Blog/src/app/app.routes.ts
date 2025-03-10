import { Routes } from '@angular/router';
import { MainPageComponent } from './MainPage/mainpage.component';
import { NewEntryPageComponent } from './NewEntryPage/newentrypage.component';

export const routes: Routes = [
  { path: 'home', component: MainPageComponent }, // Default route
    { path: 'new', component: NewEntryPageComponent },
    { path: '**', redirectTo: 'home' } // Wildcard route for 404
];
