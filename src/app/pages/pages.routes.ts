import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';

export const PAGES_COMPONENTS = [
  PageComponent,
  HomeComponent
];

export const PAGES_ROUTES: Routes = [
  {
    path: 'pregnency', component: PageComponent,
  },
  {
    path: 'babies', component: PageComponent,
  },
  {
    path: 'family', component: PageComponent,
  },
  {
    path: 'occasions', component: PageComponent,
  },
  {
    path: 'birthdays', component: PageComponent,
  },
  {
    path: 'booksession', component: PageComponent,
  },
  
   { path: '' , component: HomeComponent},
  { path: '**', component: HomeComponent}
];
