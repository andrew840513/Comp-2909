/**
 * Created by Andrew on 2017-05-14.
 */
import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { PageAComponent }        from './app.page-a';
import { PageBComponent }        from './app.page-b';
import { PageDefault }           from './app.pagedefault';

const appRoutes: Routes = [
  { path: 'page-a', component: PageAComponent },
  { path: 'page-b', component: PageBComponent },
  { path: 'page-b/:id/:firstname', component: PageBComponent },
  { path: '', redirectTo: '/page-a', pathMatch: 'full' },
  { path: '**', component: PageDefault }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
